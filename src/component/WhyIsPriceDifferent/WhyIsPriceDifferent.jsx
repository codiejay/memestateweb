import { useDifferentPrize } from "../../context/WhyIsPriceDifferentContext";

const WhyIsPriceDifferent = ({ title, content }) => {
  const { closeModal } = useDifferentPrize();
  return (
    <div
      className="fixed  w-screen z-[9999999] justify-center flex  h-screen  left-0   top-0 items-center max-w-[1600px] mx-auto"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="border-[12px] border-[#282B7F]   h-full max-w-[1102px] rounded-[32px] overflow-hidden  w-full bg-white ">
        <div className="w-full border-[10px] border-white h-full relative">
          <div className="absolute right-4 z-50">
            <button onClick={closeModal}>
              <img
                src="/images/closeblack.svg"
                alt=""
                className="lg:h-14 h-8"
              />
            </button>
          </div>
          <div className="py-6 ">
            <h1 className="text-black lg:text-4xl text-xl lg:px-10 px-2">
              {title}
            </h1>
            <div className="lg:h-fit h-[80vh] lg:overflow-hidden overflow-auto">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIsPriceDifferent;
