import { Article } from "@/types/article";
import Image from "next/image";

const OpenArticle = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col gap-[.75rem] my-[1rem]">
      <p className="text-sm font-light text-black">
        {article.date} | {article.author}
      </p>

      <p className="text-2xl font-bold text-black">{article.title}</p>

      <p className="text-lg font-normal leading-snug text-black">
        {article.content}
      </p>

      <a
        className="text-sm font-bold text-black"
        href={article.full_article}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        לכתבה המלאה
      </a>

      <Image
        className="max-h-[300px] w-full self-center"
        src={article.main_picture}
        alt="Article Main Picture"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default OpenArticle;
