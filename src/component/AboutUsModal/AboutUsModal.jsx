import { useAboutUs } from "../../context/AboutUsContext";

const AboutUsModal = ({ img, alt, name, title, content, borderColor }) => {
  const { closeModal } = useAboutUs();

  return (
    <div
      className=" fixed w-screen z-[9999999] justify-center flex  lg:h-screen h-fit top-0 left-0 items-center max-w-[1600px] mx-auto"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div
        className={
          "border-[12px]  lg:min-h-[470px] min-h-full lg:h-fit  h-full max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-[#FFFDF1] px-6 py-8"
        }
        style={{ borderColor: `${borderColor}` }}
      >
        <div className="w-full  h-full relative">
          <div className="absolute lg:right-4 right-0 z-50">
            <button onClick={closeModal}>
              <img
                src="/images/closeblack.svg"
                alt=""
                className="lg:h-14 h-8"
              />
            </button>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-2">
            <div className="w-[185px] h-[172px] rounded-[10px] overflow-hidden">
              <img src={img} alt={alt} />
            </div>
            <div>
              <h2 className="lg:text-[64px] text-2xl text-black font-normal lg:text-left text-center">
                {name}
              </h2>
              <p className="lg:text-[40px] text-xl text-[#FF0000] lg:text-left text-center">
                {title}
              </p>
            </div>
          </div>
          <p className="lg:text-[26px] text-3lg font-normal text-black font-poppins overflow-auto h-[20vh]   mt-4">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsModal;
