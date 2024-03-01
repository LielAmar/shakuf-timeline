import { useState } from "react";

import TimelineEvent from "@/components/page/content/timeline/event/TimelineEvent";
import TimelineArticle from "@/components/page/content/timeline/article/TimelineArticle";

import { Content } from "@/types/content";
import { Event } from "@/types/event";
import { Article } from "@/types/article";

const TimelineContent = ({
  content,
  position,
}: {
  content: Content;
  position: "first" | "last" | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getComponentHeight = (full: boolean) => {
    if (content.type === "event") {
      return full ? "h-[85px]" : "h-[42.5px]";
    }

    if (!isOpen) {
      return full ? "h-[200px]" : "h-[100px]";
    }

    return full ? "h-[700px]" : "h-[350px]";
  };

  return (
    <div className={`flex flex-row w-full`} id={content.date}>
      {/* Timeline Vertical Line */}
      {position === "first" && (
        <div>
          <div
            className={`z-1 mr-[16px] w-[1px] z-0 bg-transparent 
        ${getComponentHeight(false)}`}
          ></div>
          <div
            className={`z-1 mr-[16px] w-[1px] z-0 bg-black 
        ${getComponentHeight(false)}`}
          ></div>
        </div>
      )}
      {position === "last" && (
        <div>
          <div
            className={`z-1 mr-[16px] w-[1px] z-0 bg-black 
      ${getComponentHeight(false)}`}
          ></div>
          <div
            className={`z-1 mr-[16px] w-[1px] z-0 bg-transparent 
      ${getComponentHeight(false)}`}
          ></div>
        </div>
      )}
      {position === null && (
        <div
          className={`z-1 mr-[16px] w-[1px] z-0 bg-black 
              ${getComponentHeight(true)}`}
        ></div>
      )}

      {/* Event */}
      {content.type === "event" && <TimelineEvent event={content as Event} />}

      {/* Article */}
      {content.type === "article" && (
        <TimelineArticle
          article={content as Article}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default TimelineContent;
