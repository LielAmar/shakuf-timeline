import { DetailsScheme } from "@/types/schemes";

const IntroText = ({ details }: { details: DetailsScheme | null }) => {
  if (!details) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-[1rem] mr-[1rem] w-[50rem]">
      <p className="text-[28px] font-bold text-[#EE583F] leading-tight font-serif">
        {details.header.start_text}
      </p>
      <p className="text-[24px] font-normal text-black leading-tight font-sans">
        {details.header.rest_text}
      </p>
    </div>

    // <p>
    //   <span className="text-[28px] font-bold text-[#EE583F] leading-tight font-serif">
    //     {details.header.start_text}
    //   </span>
    //   <span className="text-[24px] font-normal text-black leading-tight font-sans">
    //     {details.header.rest_text}
    //   </span>
    // </p>
  );
};

export default IntroText;
