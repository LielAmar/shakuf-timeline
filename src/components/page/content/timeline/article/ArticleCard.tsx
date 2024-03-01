import { useState } from "react";

import Image from "next/image";

import { Article } from "@/types/article";

const ArticleCard = ({
  article,
  isOpen,
  setHasRead,
}: {
  article: Article;
  isOpen: boolean;
  setHasRead: (hasRead: boolean) => void;
}) => {
  const [isHovering, setIsHovering] = useState(true);
  const [isSmallLoaded, setIsSmallLoaded] = useState(false);
  const [isBigLoaded, setIsBigLoaded] = useState(false);

  return (
    <div
      className={`flex flex-row gap-[1rem]
      border-[1px] rounded ${isHovering ? "border-black" : "border-[#EE583F]"}
      h-full w-full p-[1rem]
      transition-all duration-300
      cursor-pointer`}
      onMouseEnter={() => setIsHovering(false)}
      onMouseLeave={() => setIsHovering(true)}
      onClick={() => setIsHovering(true)}
    >
      {!isOpen && (
        <>
          <div className={`${isSmallLoaded && "bg-red-600"}`}>
            <Image
              src={article.main_picture}
              alt="article_picture"
              width={160}
              height={130}
              className={`max-w-[160px] max-h-[130px] w-[160px] h-[130px] grayscale ${
                !isHovering && "opacity-75"
              } transition-all duration-300`}
              onLoad={() => setIsSmallLoaded(true)}
            />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <p
              className="text-[20px] font-normal 
              text-[#EE583F] 
              leading-tight font-sans
              transition-all duration-300"
            >
              {new Date(article.date).toLocaleDateString("en-GB")}
            </p>

            <p
              className={`text-[20px] font-medium 
              ${isHovering ? "text-black" : "text-[#EE583F]"} 
              leading-tight font-sans
              transition-all duration-300`}
            >
              {article.title}
            </p>
          </div>
        </>
      )}

      {isOpen && (
        <div className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-row gap-[1rem]">
            <p
              className="text-[16px] font-normal 
              text-black 
              leading-tight font-sans
              transition-all duration-300"
            >
              {new Date(article.date).toLocaleDateString("en-GB")}
            </p>

            <p
              className="text-[16px] font-normal 
              text-black 
              leading-tight font-sans
              transition-all duration-300"
            >
              |
            </p>

            <p
              className="text-[16px] font-normal 
              text-black 
              leading-tight font-sans
              transition-all duration-300"
            >
              {article.author}
            </p>
          </div>

          <div>
            <p
              className="text-[20px] font-bold 
              text-[#EE583F] 
              leading-tight font-sans
              transition-all duration-300"
            >
              {article.title}
            </p>
          </div>

          <div>
            <p
              className="text-[18px] font-normal 
              text-black 
              leading-tight font-sans
              transition-all duration-300"
            >
              {article.content}
            </p>
          </div>

          <div className="w-[full] flex justify-end">
            <a
              href={article.full_article}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[16px] font-bold 
              text-black hover:text-[#EE583F]
              leading-tight font-sans
              transition-all duration-300"
              onClick={(event) => {
                event.stopPropagation(); // Stop the article card from being closed
                setHasRead(true);
              }}
            >
              לכתבה המלאה
            </a>
          </div>

          <div className="w-[full] flex justify-center">
            <div className={`${isBigLoaded && "bg-red-600"}`}>
              <Image
                src={article.main_picture}
                alt="article_picture"
                width={460}
                height={300}
                className="max-w-[480px] max-h-[300px] w-[480px] h-[300px] opacity-75 grayscale"
                onLoad={() => setIsBigLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
