import { Content } from "@/types/content";

const Minimap = ({content}: {content: Content[] | null}) => {
  if (!content) {
    return <></>
  }

  return (
    <div className="w-full fixed">
      this is text
    </div>
  );
};

export default Minimap;
