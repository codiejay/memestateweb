import { useDifferentPrize } from "../../context/WhyIsPriceDifferentContext";

const WhyIsPriceDifferent = ({ title, content }) => {
  const { closeModal } = useDifferentPrize();
  return (
    <div
      className="fixed  w-screen z-[9999999] justify-center flex  h-screen  left-0   top-0 items-center max-w-[1600px] mx-auto"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="border-[12px] border-[#282B7F]   h-fit max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-white ">
        <div className="w-full border-[10px] border-white h-full relative">
          <div className="absolute right-4 z-50">
            <button onClick={closeModal}>
              <img src="/images/closeblack.svg" alt="" className="h-14" />
            </button>
          </div>
          <div className="py-6 px-10">
            <h1 className="text-black text-5xl">{title}</h1>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIsPriceDifferent;
