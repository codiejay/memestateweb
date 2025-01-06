import { useAboutUs } from "../../context/AboutUsContext";

const AboutUsModal = ({ img, alt, name, title, content, borderColor }) => {
  const { closeModal } = useAboutUs();

  return (
    <div
      className="fixed  w-screen z-[9999999] justify-center flex  lg:h-screen h-fit top-0 left-0 items-center max-w-[1600px] mx-auto"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className={
          "border-[12px]  min-h-[470px] h-fit max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-[#FFFDF1] px-6 py-8"
        }
        style={{ borderColor: `${borderColor}` }}
      >
        <div className="w-full  h-full relative">
          <div className="absolute right-4 z-50">
            <button onClick={closeModal}>
              <img src="/images/closeblack.svg" alt="" className="h-14" />
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-[185px] h-[172px] rounded-[10px] overflow-hidden">
              <img src={img} alt={alt} />
            </div>
            <div>
              <h2 className="text-[64px] text-black font-normal">{name}</h2>
              <p className="text-[40px] text-[#FF0000]">{title}</p>
            </div>
          </div>
          <p className="text-[26px] font-normal text-black font-poppins   mt-4">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;
