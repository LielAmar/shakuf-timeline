import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticlesWrapper from "@/components/content/ContentWrapper";
import StatisticsWrapper from "@/components/content/StatisticsWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 px-7">
      <Header />

      <ArticlesWrapper />
      <StatisticsWrapper />

      <Footer />
    </main>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticlesWrapper from "@/components/content/ContentWrapper";
import StatisticsWrapper from "@/components/content/StatisticsWrapper";
import IntroText from "@/components/layout/IntroText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between mr-[6rem] overscroll-auto">
      <Header />

      <div className="flex flex-row justify-between mt-[8.5rem] mr-[3rem]">
        <div className="flex flex-col w-[70%] gap-10">
          <IntroText />
          <ArticlesWrapper />
        </div>

        <div className="w-[20%] mt-5">
          <div>a</div>
          <StatisticsWrapper />
        </div>
      </div>

      {/* <ArticlesWrapper /> */}
      {/* <StatisticsWrapper /> */}

      <Footer />
    </main>
  );
}
