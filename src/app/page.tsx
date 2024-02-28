import IntroText from "@/components/page/content/IntroText";
import Navbar from "@/components/layout/Navbar";
import Timeline from "@/components/page/content/timeline/Timeline";

export default function Home() {
  return (
    <main
      className="flex flex-col min-h-screen justify-between overscroll-auto
          bg-[#FAF6F1]"
    >
      <Navbar />

      <div className="w-[90%] grid grid-cols-6 grid-rows-1 mt-[14rem]">
        <div
          className="flex flex-col gap-[3rem]
             row-start-1 col-start-2 col-end-6 mx-[4rem] 2xl:mx-[8rem]"
        >
          <IntroText />

          <Timeline />
        </div>

        <div className="row-start-1 col-start-6 col-end-6">Minimap section</div>
      </div>
    </main>
  );
}
