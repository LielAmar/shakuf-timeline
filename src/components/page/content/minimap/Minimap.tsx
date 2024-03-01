import Image from "next/image";

import { Content } from "@/types/content";
import { useState } from "react";

const analyzeContent = (content: Content[]) => {
  const min_date = {
    year: 3000,
    month: 13,
  };

  const max_date = {
    year: 0,
    month: 0,
  };

  // Loop over all the content we have and update min and max dates.
  content.forEach((c) => {
    let date = new Date(c.date);

    if (date.getFullYear() < min_date.year) {
      min_date.year = date.getFullYear();

      if (date.getMonth() < min_date.month) min_date.month = date.getMonth();
    }

    if (date.getFullYear() > max_date.year) {
      max_date.year = date.getFullYear();

      if (date.getMonth() > max_date.month) max_date.month = date.getMonth();
    }
  });

  // Create an object with all the months and their content.
  const content_per_month: { [date: string]: Content[] } = {};

  for (let i = min_date.year; i <= max_date.year; i++) {
    let j = i == min_date.year ? min_date.month : 0;
    let end = i == max_date.year ? max_date.month : 11;

    for (j; j <= end; j++) {
      let dateString = i + "-" + (j + 1);
      content_per_month[dateString] = [];
    }
  }

  content.forEach((c) => {
    const date = new Date(c.date);
    const dateString = date.getFullYear() + "-" + (date.getMonth() + 1);
    content_per_month[dateString].push(c);
  });

  // Calculate the number of months between the min and max date.
  const number_of_months =
    (max_date.year - min_date.year) * 12 + max_date.month - min_date.month + 1;

  return { content_per_month, number_of_months };
};

const seperator = (height: number, selectedMonth: string, month: string) => {
  const color = selectedMonth == month ? "#EE583F" : "#000000";

  return (
    <div
      style={{ height: `${height}px`, backgroundColor: color }}
      className={`w-[1px]`}
    ></div>
  );
};

const Minimap = ({ content }: { content: Content[] | null }) => {
  if (!content) {
    return <></>;
  }

  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const {
    content_per_month,
    number_of_months,
  }: {
    content_per_month: { [date: string]: Content[] };
    number_of_months: number;
  } = analyzeContent(content);

  const minimap_height = 650;

  const month_height = minimap_height / number_of_months;

  return (
    <div className="w-[100%] flex flex-col items-center">
      <Image
        src="images/minimap_start_end.svg"
        alt="minimap_start"
        width={12}
        height={12}
      />

      {Object.keys(content_per_month).map((month: any, index: number) => {
        const month_content = content_per_month[month];

        if (month_content.length == 0) {
          return seperator(month_height, selectedMonth, month);
        }

        const events_height =
          month_content.filter((c) => c.type === "event").length * 20;

        const height_left = month_height - events_height;
        const number_of_articles = month_content.filter(
          (c) => c.type === "article"
        ).length;
        const items_height = number_of_articles * 12;
        const distance_between_articles =
          (height_left - items_height) / number_of_articles;

        // const number_of_items = month_content.length;
        // const item_height =
        // (month_height - distance_between_items * number_of_items) /
        // number_of_items;
        console.log("month_height", month_height);
        console.log("items_height", items_height);
        console.log("month_content", month_content.length);
        const distance_between_items =
          (month_height - items_height) / month_content.length;
        console.log("distance_between_items", distance_between_items);

        return (
          <a
            key={index}
            className="w-full flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setSelectedMonth(month)}
            onMouseLeave={() => {
              if (selectedMonth == month) setSelectedMonth("");
            }}
            href={"#" + month_content[0].date}
          >
            {month_content.map((c, index) => {
              if (c.type === "article") {
                return (
                  <>
                    <Image
                      src={
                        selectedMonth == month
                          ? "images/minimap_article_active.svg"
                          : "images/minimap_article.svg"
                      }
                      alt="minimap_article"
                      width={12}
                      height={12}
                      key={index}
                    />

                    {seperator(distance_between_items, selectedMonth, month)}
                  </>
                );
              }

              if (c.type === "event") {
                return (
                  <>
                    <div className="flex flex-row">
                      <Image
                        src={
                          selectedMonth == month
                            ? "images/minimap_event_active.svg"
                            : "images/minimap_event.svg"
                        }
                        alt="minimap_event"
                        width={40}
                        height={20}
                        key={index}
                        className={`relative ${
                          selectedMonth !== month
                            ? "right-[19px]"
                            : "right-[69px]"
                        }`}
                      />

                      {selectedMonth == month && (
                        <div className="w-[100px] relative right-[75px] bottom-[1.5px]">
                          <p className="text-[12px] text-[#E83C3C] font-sans">
                            {c.title.length > 10
                              ? c.title.substring(0, 10) + "..."
                              : c.title}
                          </p>
                        </div>
                      )}
                    </div>

                    {seperator(distance_between_items, selectedMonth, month)}
                  </>
                );
              }
            })}
          </a>
        );
      })}

      <Image
        src="images/minimap_start_end.svg"
        alt="minimap_end"
        width={12}
        height={12}
      />
    </div>
  );
};

export default Minimap;
