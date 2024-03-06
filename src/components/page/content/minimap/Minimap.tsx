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

const seperator = (
  height: number,
  selectedMonth: string,
  month: string,
  index: number | null = null
) => {
  const color = selectedMonth == month ? "#EE583F" : "#000000";

  return (
    <div
      key={index}
      style={{ height: `${height}px`, backgroundColor: color }}
      className={`w-[1px]`}
    ></div>
  );
};

const Minimap = ({ content }: { content: Content[] | null }) => {
  if (!content) {
    return <></>;
  }

  // offset
  // Two conseq articles = 9px
  const offset = 5;
  const per_day_multiplier = 6.25;
  const event_height = 10;
  const article_height = 13;

  let current_offset = 0;

  content = [content[0], ...content, content[content.length - 1]];

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      {content.map((c, index) => {
        if (index === 0) {
          return (
            <div style={{ top: 0 }} className={`absolute h-[13px] w-[13px]`}>
              <Image
                key={index}
                src="/images/minimap_start_end.svg"
                alt="minimap_start"
                width={13}
                height={13}
              />
            </div>
          );
        }

        if (index === content.length - 1) {
          current_offset += 12;

          return (
            <div
              style={{ top: current_offset + offset }}
              className={`absolute h-[13px] w-[13px]`}
            >
              <Image
                key={index}
                src="/images/minimap_start_end.svg"
                alt="minimap_start"
                width={13}
                height={13}
              />
            </div>
          );
        }

        if (c.type === "article") {
          let old_offset = current_offset;

          let diff = 0;

          const prev_c = content[index - 1];

          const prev_date = new Date(prev_c.date);
          const date = new Date(c.date);

          const diff_in_days = Math.round(
            (date.getTime() - prev_date.getTime()) / (1000 * 3600 * 24)
          );

          diff = Math.round(Math.log(diff_in_days + 1));

          current_offset += diff * per_day_multiplier;
          current_offset += prev_c.type === "event" ? event_height : 0;

          return (
            <>
              {/* <div
                style={{ top: old_offset, height: current_offset - old_offset }}
                className={`absolute w-[1px] bg-black`}
              >
                ‎
              </div> */}
              <div
                style={{ top: current_offset + offset }}
                className={`absolute h-[13px] w-[13px]`}
              >
                <Image
                  key={index}
                  src="/images/minimap_article.svg"
                  alt="article"
                  width={13}
                  height={article_height}
                />
              </div>
            </>
          );
        }

        if (c.type === "event") {
          let diff = 0;

          const prev_c = content[index - 1];

          const prev_date = new Date(prev_c.date);
          const date = new Date(c.date);

          const diff_in_days = Math.round(
            (date.getTime() - prev_date.getTime()) / (1000 * 3600 * 24)
          );

          diff = Math.round(Math.log(diff_in_days + 1));

          current_offset += diff * per_day_multiplier;
          current_offset += prev_c.type === "event" ? event_height : 0;
          current_offset += prev_c.type === "article" ? article_height : 0;

          return (
            <div
              style={{ top: current_offset + offset }}
              className={`absolute h-[10px] w-[19px] left-[-18px]`}
            >
              <Image
                key={index}
                src="/images/minimap_event_line.svg"
                alt="event"
                width={19}
                height={event_height}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Minimap;
