import { DetailsScheme } from "@/types/schemes";

const IntroText = ({ details }: { details: DetailsScheme | null }) => {
  if (!details) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-[0.375rem] mr-[1rem] w-[50rem]">
      <p className="text-[28px] font-bold text-[#EE583F] leading-tight font-serif">
        {details.header.start_text}
      </p>
      <p className="text-[24px] font-normal text-black leading-tight font-sans">
        {details.header.rest_text}
      </p>
    </div>
  );
};

export default IntroText;
