import { Content } from "@/types/content";

import TimelineContent from "./TimelineContent";

const Timeline = ({content}: {content: Content[] | null}) => {
  if (!content) {
    return <></>
  }

  return (
    <div className="w-full">
      {content.map((contentPeice: Content, index: number) => {
        if (index == 0)
          return (
            <TimelineContent
              key={index}
              content={contentPeice}
              position={"first"}
            />
          );
        else if (index == content.length - 1)
          return (
            <TimelineContent
              key={index}
              content={contentPeice}
              position={"last"}
            />
          );
        else
          return (
            <TimelineContent
              key={index}
              content={contentPeice}
              position={null}
            />
          );
      })}
    </div>
  );
};

export default Timeline;
