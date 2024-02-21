import { Article } from "@/types/article";

const ClosedArticle = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-row gap-[2rem] items-center">
      <p className="text-sm font-light text-black w-[10rem]">{article.date}</p>

      <p className="text-md font-medium text-black w-[18]">{article.title}</p>
    </div>
  );
};

export default ClosedArticle;
