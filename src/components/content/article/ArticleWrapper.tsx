import { Article } from "@/types/article";

import ClosedArticle from "./ClosedArticle";
import OpenArticle from "./OpenArticle";

const ArticleWrapper = ({
  article,
  isOpen,
  setIsOpen,
}: {
  article: Article;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div
      className="cursor-pointer rounded-lg bg-white
        px-7 py-1 w-[30rem] h-full
        drop-shadow-[0_12px_12px_rgba(0,0,0,0.25)] "
      onClick={() => setIsOpen(!isOpen)}
    >
      {!isOpen && <ClosedArticle article={article} />}

      {isOpen && <OpenArticle article={article} />}
    </div>
  );
};

export default ArticleWrapper;
