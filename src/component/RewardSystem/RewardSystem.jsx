import { contentList, useWindowSize } from "../../utils";
import ButtonWithSound from "../Button/Button";

const RewardSystem = () => {
  const { width } = useWindowSize();
  return (
    <div>
      {width <= 988 ? (
        <div className="my-6 flex flex-col gap-14 items-center justify-center stack">
          {contentList.map((item, index) => {
            return (
              <div
                className="h-[788px] w-full shadow-black-custom relative "
                key={index}
              >
                <div className="bg-[#A3A5E1] h-[381px]">
                  <img src={item.image} alt="" />
                </div>
                <div className="h-[403px] bg-[#FF0000] flex  flex-col items-center gap-3 py-1">
                  <h1 className="text-3xl font-normal leading-[48px] text-white text-center">
                    {item.title}
                  </h1>
                  <p className="text-lg font-poppins  leading-[24px] font-medium text-white text-center">
                    {item.text}
                  </p>

                  <ButtonWithSound
                    label={"Learn more"}
                    type={"beta"}
                    soundPath={"/audio/button.mp3"}
                    className={"bg-[#2C2F8C]"}
                  />
                </div>
                <div className="flex justify-between absolute top-[43%] w-full">
                  <div className=" ">
                    <img src="/images/KNOTm.png" alt="" />
                  </div>
                  <div className="">
                    <img src="/images/KNOTm1.png" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex justify-center flex-col mt-8 max-w-[1200px]">
            {contentList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2  grid-cols-1 mt-10 relative justify-center w-full"
                >
                  <div className="z-40">
                    <div className="masked-div-1 relative lg:w-[924px] w-full">
                      <div className="px-10 pt-4 pb-6">
                        {item.title}

                        <p className="max-w-md font-poppins my-5">
                          {item.text}
                        </p>

                        <ButtonWithSound
                          label={"Learn more"}
                          type={"beta"}
                          soundPath={"/audio/button.mp3"}
                          className={"bg-[#2C2F8C]"}
                        />
                      </div>
                      <div className="absolute right-[1%] top-8 lg:block  hidden">
                        <img src="/images/KNOT.png" alt="" />
                      </div>
                      <div className="absolute right-[22%] bottom-10 lg:block  hidden">
                        <img src="/images/KNOT.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="-ml-40 z-30 mt-6 relative lg:block ">
                    <div className="masked-div-2">
                      <div className=" py-4 flex justify-end items-center ">
                        <div className="w-[400px] mt-6 ">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardSystem;
