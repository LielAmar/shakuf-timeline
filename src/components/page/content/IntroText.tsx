import { DetailsScheme } from "@/types/schemes";

const IntroText = ({details}: {details: DetailsScheme | null}) => {
  if (!details) {
    return <></>
  }

  return (
    <p>
      <span className="text-[28px] font-bold text-[#EE583F] leading-tight font-serif">
        {details.header.start_text}
      </span>
      <span className="text-[24px] font-normal text-black leading-tight font-sans">
        {details.header.rest_text}
      </span>
    </p>
  );
};

export default IntroText;
