import { Content } from "@/types/content";
import Image from "next/image";

const Minimap = ({ content }: { content: Content[] | null }) => {
  if (!content) {
    return <></>;
  }

  const height = 650;
  const min_date = {
    year: 3000,
    month: 13,
  };
  const max_date = {
    year: 0,
    month: 0,
  };

  content.forEach((c) => {
    let date = new Date(c.date);
    if (date.getFullYear() < min_date.year) {
      min_date.year = date.getFullYear();

      if (date.getMonth() < min_date.month) {
        min_date.month = date.getMonth();
      }
    }

    if (date.getFullYear() > max_date.year) {
      max_date.year = date.getFullYear();

      if (date.getMonth() > max_date.month) {
        max_date.month = date.getMonth();
      }
    }
  });

  const number_of_months =
    (max_date.year - min_date.year) * 12 + max_date.month - min_date.month + 1;
  const months = new Array(number_of_months).fill(0);

  const month_height = Math.round(height / number_of_months);

  return (
    <div className="w-[100%] flex flex-col items-center">
      <Image
        src="images/minimap_start_end.svg"
        alt="minimap_start"
        width={12}
        height={12}
      />

      {months.map((month: any, index: number) => {
        return (
          <div
            style={{ height: `${month_height}px` }}
            className={`w-[1px] bg-black`}
            key={index}
          >
            asdfasd
          </div>
        );
      })}

      <Image
        src="images/minimap_start_end.svg"
        alt="minimap_end"
        width={12}
        height={12}
      />
    </div>
  );
};

export default Minimap;
