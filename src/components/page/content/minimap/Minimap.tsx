import Image from "next/image";

import { Content } from "@/types/content";
import { useState } from "react";

const Separator = ({ height, offset }: { height: number; offset: number }) => {
  return (
    <div
      style={{ height: `${height}px`, top: `${offset}px` }}
      className={`absolute w-[1.2px] bg-black`}
    >
      ‎
    </div>
  );
};

const Minimap = ({ content }: { content: Content[] }) => {
  if (!content) {
    return <></>;
  }

  const [selectedItem, setSelectedItem] = useState("");

  const offset = 5;
  const per_day_multiplier = 4.75;
  const event_height = 12;
  const article_height = 13;

  let current_offset = 0;

  content = [content[0], ...content, content[content.length - 1]];

  return (
    <div className={`w-full h-full flex flex-col items-center`}>
      {content.map((c, index) => {
        if (index === 0) {
          return (
            <>
              <div
                style={{ top: 0 }}
                className={`flex flex-row absolute items-center
                  h-[13px] w-[13px] 
                  left-[38.5px]`}
              >
                <p className="text-[15px] font-sans ml-[1rem]">
                  {new Date(c.date).getFullYear()}
                </p>

                <Image
                  src="/images/minimap_start_end.svg"
                  alt="minimap_start"
                  width={13}
                  height={13}
                  onMouseEnter={() => setSelectedItem(index + "")}
                  onMouseLeave={() => setSelectedItem("")}
                />
              </div>

              <Separator height={offset} offset={13} />
            </>
          );
        }

        if (index === content.length - 1) {
          current_offset += 12;

          return (
            <>
              <Separator height={offset} offset={current_offset} key={index} />

              <div
                style={{ top: current_offset + offset }}
                className={`flex flex-row absolute items-center
                  h-[13px] w-[13px] 
                  left-[38.5px]`}
              >
                <p className="text-[15px] font-sans ml-[1rem]">
                  {new Date(c.date).getFullYear()}
                </p>
                <Image
                  src="/images/minimap_start_end.svg"
                  alt="minimap_start"
                  width={13}
                  height={13}
                  onMouseEnter={() => setSelectedItem(index + "")}
                  onMouseLeave={() => setSelectedItem("")}
                />
              </div>
            </>
          );
        }

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
        current_offset +=
          prev_c.type === "article" && c.type === "event" ? article_height : 0;

        const line_start =
          old_offset +
          (prev_c.type === "event" ? event_height - 1 : article_height - 1) +
          offset;

        const line_end = current_offset + 1 + offset;

        return (
          <>
            <Separator
              height={Math.max(line_end - line_start, 0)}
              offset={line_start}
            />

            {c.type === "article" && (
              <a
                href={`#${c.date}`}
                style={{ top: current_offset + offset }}
                className={`absolute h-[13px] w-[13px] cursor-pointer`}
              >
                <Image
                  src={
                    selectedItem === index + ""
                      ? "/images/minimap_article_active.svg"
                      : "/images/minimap_article.svg"
                  }
                  alt="article"
                  width={13}
                  height={article_height}
                  onMouseEnter={() => setSelectedItem(index + "")}
                  onMouseLeave={() => setSelectedItem("")}
                />
              </a>
            )}

            {c.type === "event" && (
              <a
                href={`#${c.date}`}
                style={{ top: current_offset + offset }}
                className={`absolute h-[12px] w-[23px] left-[-22.25px] cursor-pointer`}
              >
                <Image
                  src={
                    selectedItem === index + ""
                      ? "/images/minimap_event_line_active.svg"
                      : "/images/minimap_event_line.svg"
                  }
                  alt="event"
                  width={23}
                  height={event_height}
                  onMouseEnter={() => setSelectedItem(index + "")}
                  onMouseLeave={() => setSelectedItem("")}
                />

                {selectedItem === index + "" && (
                  <p
                    className="absolute w-[20rem] text-[#EE583F]
                    text-[13px] top-[-3px] right-[28px] font-sans"
                  >
                    {c.title.length > 20
                      ? c.title.substring(0, 20) + "..."
                      : c.title}
                  </p>
                )}
              </a>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Minimap;
