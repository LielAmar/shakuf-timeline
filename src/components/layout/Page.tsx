import IntroText from "@/components/layout/IntroText";
import Navbar from "@/components/layout/Navbar";
import Timeline from "@/components/page/content/timeline/Timeline";
import Minimap from "@/components/page/content/minimap/Minimap";

import { DetailsScheme } from "@/types/schemes";
import { Content } from "@/types/content";

const Page = ({
  details,
  content,
}: {
  details: DetailsScheme;
  content: Content[];
}) => {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Navbar details={details} />

      <div className="w-[100%] grid grid-cols-6 grid-rows-1 mt-[180px]">
        <div
          className="flex flex-col gap-[37px]
         row-start-1 col-start-2 col-end-5"
        >
          <IntroText details={details} />

          <Timeline content={content} />
        </div>

        <div className="flex justify-end ml-[1.5rem] row-start-1 col-start-5 col-end-5">
          <div className="fixed">
            <Minimap content={content} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
