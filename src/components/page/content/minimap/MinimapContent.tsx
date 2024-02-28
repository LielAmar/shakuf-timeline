import { useState } from "react";

import { Content } from "@/types/content";

const MinimapContent = ({
  content,
  position,
}: {
  content: Content;
  position: "first" | "last" | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (position == "last") {
    console.log("content: ", content);
  }

  return (
    <div className={`flex flex-row w-full h-[100px]`}>
    <div
        className={`z-1 w-[1px] z-0 bg-black h-[100px]`}
    >
        ‎
    </div>

      {/* Event */}
      {/* {content.type === "event" && <TimelineEvent event={content as Event} />} */}

      {/* Article */}
      {/* {content.type === "article" && ( */}
        
      {/* )} */}
    </div>
  );
};

export default MinimapContent;
