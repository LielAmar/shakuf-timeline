import { Content } from "@/types/content";
import MinimapContent from "./MinimapContent";

const Minimap = ({content}: {content: Content[] | null}) => {
  if (!content) {
    return <></>
  }

  return (
    <div className="w-full fixed">
      {content.map((contentPeice: Content, index: number) => {
        if (index == 0)
          return (
            <MinimapContent 
              key={index}
              content={contentPeice}
              position={"first"}
            />
          );
        else if (index == content.length - 1)
          return (
            <MinimapContent
              key={index}
              content={contentPeice}
              position={"last"}
            />
          );
        else
          return (
            <MinimapContent 
              key={index}
              content={contentPeice}
              position={null}
            />
          );
      })}
    </div>
  );
};

export default Minimap;
