import { useEffect, useRef, useState } from "react";
import Button from "./component/Button/Button";
import CountDown from "./component/CountDown/CountDown";
// import HowItWorks from "./component/HowItWorks/HowItWorks";
import MarqueeComponent from "./component/MarqueeComponent/MarqueeComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carouselItems, howToPlay } from "./utils";
import HowToPlay from "./component/HowToPlay/HowToPlay";
// import RoadMapCard from "./component/RoadMapCard/RoadMapCard";
import AdvertisementSlick from "./component/AdvertismentSlick/AdvertismentSlick";
import RewardSystem from "./component/RewardSystem/RewardSystem";
import VideoModal from "./component/VideoModal/VideoModal";
import { useModal } from "./context/VideoContext";
import ButtonWithSound from "./component/Button/Button";
import IFrameModal from "./component/IFrameModal/IFrameModal";
// import { useIframeModal } from "./context/IframeContext";
import WhyIsPriceDifferent from "./component/WhyIsPriceDifferent/WhyIsPriceDifferent";
// import { useDifferentPrize } from "./context/WhyIsPriceDifferentContext";
// import GlassCard from "./component/GlassCard/GlassCard";
import RoadMapSlider from "./component/RoadMapSlider/RoadMapSLider";
// import { Link } from "react-router-dom";
import CardScrollEffect from "./component/StackCard/StackCard";
import { useIframeModal } from "./context/IframeContext";
import { useDifferentPrize } from "./context/WhyIsPriceDifferentContext";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { openModal, isOpen } = useModal();
  const [selectedModal, setSelectedModal] = useState("");
  const { openModal: openIFrameModal, isOpen: isIframeOpen } = useIframeModal();
  const { isOpen: isOpenPrizeModal, toggleModal: openPrizeModal } =
    useDifferentPrize();
  const container = useRef(null);
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    // GSAP animation for banner content
    gsap.fromTo(
      ".banner-content", // Target elements with the "banner-content" class
      { opacity: 0, y: 50 }, // Starting state
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3, // Stagger for sequential animation
        ease: "power3.out", // Easing function
      }
    );
  }, []);
  const handleExplanationModal = () => {
    setSelectedModal("explanation");
    openPrizeModal();
  };
  const handleTokenoMics = () => {
    setSelectedModal("tikenomic");
    openPrizeModal();
  };

  return (
    <div ref={container}>
      <section className=" z-50    banner bg-[url('/images/bgImage.png')]  bg-cover  w-full bg-no-repeat  bg-center relative lg:h-screen  h-full overflow-hidden ">
        <div className="h-full  flex justify-center items-center flex-col  bannerContent lg:pt-32 pt-[6rem]  ">
          <div className="flex justify-center lg:flex-row flex-col items-center lg:px-20 px-4 py-10 gap-20">
            <div className=" flex flex-col  justify-center items-center ">
              <div className="banner-content flex w-full justify-center ">
                <img
                  src="/images/bannerContent.png"
                  alt=""
                  className="w-[100%] bannerImg"
                />
              </div>
              {/* <p className="text-xl font-bold text-[#EEEFFF]   banner-content font-poppins mt-5 mb-8  text-center max-w-[702px] capitalize">
                earn, play, and thrive by combining sustainable gaming with
                real-world rewards powered by $GEMS..
              </p> */}

              <div className="flex lg:flex-row flex-col  justify-center  items-center w-full  gap-5   ">
                <div className="banner-content">
                  <ButtonWithSound
                    type={"beta"}
                    soundPath={"/audio/button.mp3"}
                    label={"Watch Demo"}
                    className={"bg-[#FF0000] "}
                    onClick={openModal}
                  />
                </div>

                <div className="banner-content hidden">
                  <a
                    href="https://tokentool.bitbond.com/tokensale/0x3730Aa2a33a1f0704d5ac6634e64E4B14253Dad3?chainId=8453"
                    target="_blank"
                  >
                    <ButtonWithSound
                      type={"alpha"}
                      soundPath={"/audio/button2.mp3"}
                      label={"Founder’s Explainer"}
                      // onClick={openModal}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className=" howItWorks flex justify-end ">
                <div className="relative  flex justify-end lg:mt-0 mt-4 w-full lg:order-2 order-1 xl:w-[80%] lg:w-full ">
                  <div className="  lg:w-fit  w-full">
                    <div className=" w-full relative">
                      <div className="border-[#000] border-[12px] shadow-black-custom  py-4 h-fit bg-[#9D9FD8] flex justify-center items-center ">
                        <h1 className="text-black text-center  lg:text-[36px] text-xl    px-2 leading-9">
                          Buy your $gems Token in presale now!
                        </h1>
                      </div>
                      <div className="lg:absolute relative  lg:top-[7rem] lg:left-1/2 lg:-translate-x-1/2  countdownStyle lg:w-[82%] w-full lg:mt-0 mt-8 ">
                        <CountDown />
                      </div>
                      <div className="border-[#000] border-[12px] shadow-black-custom  bg-[#9D9FD8] flex justify-center items-center flex-col  mt-10 px-6 py-6  h-fit ">
                        <div className="text-black text-center flex justify-center items-center gap-4 my-6">
                          <p className="lg:text-3xl text-2xl">1 $GEMS</p>{" "}
                          <img src="/images/equals.svg" alt="" />
                          <p className="lg:text-3xl text-2xl">0.0001 USDT</p>
                        </div>

                        <div className="w-full flex flex-col gap-5">
                          <div className="w-full flex justify-center">
                            <ButtonWithSound
                              label={"Buy $GEMS"}
                              type={"beta"}
                              soundPath={"/audio/button.mp3"}
                              className={"bg-[#FF0000]  w-[80%]"}
                              onClick={openIFrameModal}
                            />
                          </div>
                        </div>
                        <div className="col-2 mt-10  ">
                          <a
                            href="#nextsection"
                            className="flex items-center gap-2 "
                          >
                            <p className="text-black gap-1 text-xl">
                              Scroll down for more info
                            </p>
                            <img
                              src="/images/CaretDownBlack.png"
                              alt="CaretDownBlack"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto ">
            {/* <div className="w-full   bg-[#53224D] h-4"></div> */}
            <MarqueeComponent />
          </div>
        </div>
      </section>

      <section
        className="bg-[#27297A] lg:px-14 px-3  section-2 py-5 relative page   h-full hidden  "
        ref={sectionRefs[1]}
        id="nextsection"
      >
        <div className=" lg:grid lg:grid-cols-5 items-center flex flex-col  gap-9 py-8 justify-center howItWorks ">
          <div className="relative  justify-between lg:mt-0 mt-4 w-full col-span-3 ">
            <div className="w-full ">
              <div className="mt-9  ">
                <div className="  mb-4  items-center justify-start hidden lg:flex  gap-5">
                  <h1 className="text-white font-normal capitalize  text-[48px]">
                    Join the
                  </h1>
                  <div>
                    <img
                      src="/images/memestate.png"
                      alt=""
                      className="h-[70px]"
                    />
                  </div>
                  <h1 className="text-white font-normal capitalize   text-[48px]">
                    Presale
                  </h1>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-5 mt-12">
                  <h2 className="text-2xl font-normal text-[#FFC727]">
                    Presale Stage
                  </h2>
                  <button
                    className="underline  text-lg font-normal lg:mb-0 mb-7"
                    onClick={handleExplanationModal}
                  >
                    Why does the presale price show $0.001 instead of $0.0001?
                  </button>
                </div>

                <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-10">
                  <li>
                    <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                      Stage 1{" "}
                      <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins uppercase ">
                        Ongoing
                      </span>
                    </h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 200,000,000 $GEMS up for grabs at 67% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 2</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 300,000,000 $GEMS up for grabs at 50% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 3</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 400,000,000 $GEMS up for grabs at 33% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 4</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 500,000,000 $GEMS up for grabs at 23% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 5</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 600,000,000 $GEMS up for grabs at 13% discount
                    </p>
                  </li>
                </ul>
                <div className="flex lg:flex-row flex-col items-center gap-5 mt-12">
                  <Button
                    type={"beta"}
                    soundPath={"/audio/button2.mp3"}
                    label={"Join The Pre-sale Now"}
                    onClick={openIFrameModal}
                    className={"bg-[#FF0000]"}
                  />
                  <button
                    className="underline  text-lg font-normal "
                    onClick={handleTokenoMics}
                  >
                    tokenomics and presale details
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full overflow-hidden lg:px-0 px-2  col-span-2 flex  justify-end ">
            <HowItWorks items={carouselItems} />
          </div> */}
        </div>

        <div className=" absolute right-0  -bottom-12 lg:block hidden">
          <img src="/images/coin.png" alt="" />
        </div>
      </section>
      <section
        className="bg-[#27297A] lg:px-14 px-3  section-2 py-5 relative page   h-full   "
        ref={sectionRefs[1]}
        id="nextsection"
      >
        <div>
          <div className="  mb-4  items-center justify-center  lg:flex-row flex-col flex mt-5  gap-5">
            <h1 className="text-white font-normal capitalize  text-[48px]">
              Join the
            </h1>
            <div>
              <img src="/images/memestate.png" alt="" className="h-[70px]" />
            </div>
            <h1 className="text-white font-normal capitalize   text-[48px]">
              Presale
            </h1>
          </div>

          <h2 className="text-center text-[32px] font-normal text-[#FFC727] my-10">
            Where we invest
          </h2>

          <div className="grid lg:grid-cols-3  grid-cols-1">
            {carouselItems?.map((project, index) => {
              return <div key={index}>{project}</div>;
            })}
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-center gap-5 mt-12">
            <Button
              type={"beta"}
              soundPath={"/audio/button2.mp3"}
              label={"Join The Pre-sale Now"}
              onClick={openIFrameModal}
              className={"bg-[#FF0000]"}
            />
            <ButtonWithSound
              type={"alpha"}
              soundPath={"/audio/button2.mp3"}
              label={"tokenomics and presale details"}
              onClick={handleTokenoMics}
            />
          </div>
          <div className="flex justify-center my-9">
            <button
              className="underline  text-lg font-normal lg:mb-0 mb-7"
              onClick={handleExplanationModal}
            >
              Why does the presale price show $0.001 instead of $0.0001?
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-[#27297A] lg:px-0  px-4  lg:pt-20 h-full pt-24 pb-10 relative overflow-x-hidden page lg:block hidden"
        ref={sectionRefs[2]}
      >
        <div className="flex justify-center relative ">
          <div className="w-fit flex justify-center relative">
            <div className="lg:relative absolute lg:bottom-[unset] lg:left-[unset] bottom-28 left-0">
              <img src="/images/titleDiamond.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center relative ">
              <h1 className="text-white font-normal capitalize mb-2 text-3xl text-center">
                Memestate sustainable
              </h1>
              <div className="lg:mb-0 mb-6">
                <img src="/images/rewardSystem.png" alt="" />
              </div>
            </div>
            <div className=" absolute -right-16 -bottom-8 lg:block  hidden">
              <img src="/images/dice.png" alt="" />
            </div>
          </div>
        </div>

        <RewardSystem />
      </section>
      <section className="bg-[#27297A] lg:px-0  px-2  lg:pt-20 h-full pt-24 pb-10 relative lg:hidden block">
        <div className="flex justify-center relative ">
          <div className="w-fit flex justify-center relative">
            <div className="lg:relative absolute lg:bottom-[unset] lg:left-[unset] bottom-28 left-0">
              <img src="/images/titleDiamond.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center relative ">
              <h1 className="text-white font-normal capitalize mb-2 text-3xl text-center">
                Memestate sustainable
              </h1>
              <div className="lg:mb-0 mb-6">
                <img src="/images/rewardSystem.png" alt="" />
              </div>
            </div>
            <div className=" absolute -right-16 -bottom-8 lg:block  hidden">
              <img src="/images/dice.png" alt="" />
            </div>
          </div>
        </div>
        <CardScrollEffect />
      </section>
      <section
        className="bg-[#27297A] lg:px-14 px-0 py-16 relative overflow-hidden  page  "
        ref={sectionRefs[3]}
      >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-white font-normal capitalize mb-2  lg:text-[48px] text-2xl">
            Playing
          </h1>
          <div>
            <img
              src="/images/memestate.png"
              alt=""
              className="lg:w-[402px] w-full lg:h-[92px] h-[4rem]"
            />
          </div>
        </div>
        <HowToPlay items={howToPlay} />
      </section>

      <section
        className="bg-[#4F7298] px-16 py-8   border-t-[9px] border-black relative  h-full"
        ref={sectionRefs[4]}
      >
        <div className="absolute lg:-top-20 -top-8 left-1/2 -translate-x-1/2 ">
          <img src="/images/HANGING.png" alt="hanging" />
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-1 w-full  mt-10 justify-center items-end   ">
          <div className="col-span-2  ">
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center lg:my-0 my-9">
              <div className="flex flex-col justify-start items-start my-6 ">
                <img src="/images/rocket.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight lg:mr-24 lg:text-left text-center  ">
                FAST PACED GAMEPLAY:
              </p>
              <p className="text-xl font-medium mt-4 font-poppins  lg:text-left text-center">
                Enjoy rapid 5-minute rounds for a fun and manageable experience.
              </p>
            </div>
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center lg:my-0 my-9">
              <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center  my-6">
                <img src="/images/gold.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight lg:mr-24 lg:text-left text-center  ">
                CLAIM YOUR REWARD:
              </p>
              <p className="text-xl font-medium mt-4 font-poppins lg:text-left text-center ">
                Collect reward chests with character shards and gems, and use
                gems to create and customize your guild, with funny Memechance
                and Memeopportunity cards adding humor to the game.
              </p>
            </div>
          </div>
          <div className="col-span-3  justify-center items-center  h-full   hidden lg:flex">
            <div className="mt-28">
              <img src="/images/foxy.png" alt="" className="w-[350px]" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col lg:justify-end  justify-center lg:items-end items-center lg:my-0 my-9">
              <div className="my-6">
                <img src="/images/flash.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight mt-3 mb-2 lg:text-right text-center">
                FEEL THE PROGRESSION
              </p>
              <p className="text-xl font-medium mt-4 font-poppins lg:text-right text-center">
                Unlock, level up, and enhance characters with special abilities
                to gain strategic advantages.
              </p>
            </div>
            <div className="flex flex-col lg:justify-end  justify-center lg:items-end items-center lg:mt-10 lg:my-0 my-9">
              <div className="my-6">
                <img src="/images/cup.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight mt-3 mb-2 lg:ml-24 lg:text-right text-center">
                BE THE CHAMPION
              </p>
              <p className="text-xl font-medium mt-4 font-poppins lg:text-right text-center">
                Climb leagues and leaderboards to become the Ultimate Memestate
                Champion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#27297A] lg:px-16 px-4 py-2 relative overflow-hidden page"
        ref={sectionRefs[5]}
      >
        <div className="flex flex-col justify-center items-center my-10 ">
          <div>
            <img
              src="/images/memestate.png"
              alt=""
              className="w-[402px] h-[92px] my-1"
            />
          </div>
          <h1 className="text-white font-normal capitalize text-2xl ">
            Advertisement Model
          </h1>
        </div>

        {/* <Advertisement items={advertisement} /> */}
        <AdvertisementSlick />
      </section>
      <section
        className="bg-[#27297A] lg:px-16 px-4 py-16 relative overflow-hidden  page"
        ref={sectionRefs[6]}
      >
        <div className="flex justify-center ">
          <img src="/images/memestatePrize.png" alt="" className="w-[1000px]" />
        </div>

        <div className=" grid lg:grid-cols-2 justify-center items-center gap-16 mt-10 ">
          <div className="lg:col-span-1 col-span-2 flex justify-end">
            <div className="w-full">
              <img src="/images/prize1.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-2 flex justify-start">
            <div className="w-full">
              <img src="/images/prize2.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="col-span-2 flex justify-center">
            <div className="w-full">
              <img src="/images/prize3.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#27297A] py-5  px-4 lg:px-0 page relative"
        id="roadMap"
      >
        <div className="flex justify-center   ">
          <h1 className="lg:text-[100px] text-5xl font-normal text-white mb-5">
            ROADMAP
          </h1>
        </div>

        <RoadMapSlider />

        {isOpen && <VideoModal />}
        {isIframeOpen && <IFrameModal />}
        {isOpenPrizeModal && (
          <WhyIsPriceDifferent
            title={
              selectedModal === "explanation"
                ? "Why does the presale price show $0.001 instead of $0.0001?"
                : "Tokenomics and presale"
            }
            content={
              selectedModal === "explanation" ? (
                <div className="mt-10 lg:px-10 px-4">
                  <p className="lg:text-[24px] text-base font-normal text-[#1F1F1F] mb-8 font-poppins">
                    Don’t worry, you’re still getting your tokens at $0.0001.
                    Here’s why:
                  </p>
                  <p className="lg:text-[24px] text-base font-normal text-[#1F1F1F] my-4 font-poppins">
                    The $0.001 price reflects the 10% of tokens that will be
                    unlocked at the Token Generation Event (TGE), as outlined in
                    the tokenomics. The remaining 90% will be sent to you
                    manually later.
                  </p>
                  <p className="lg:text-[24px] text-base font-normal text-[#1F1F1F] my-4 font-poppins">
                    The higher price is due to technical limitations in the
                    presale software, which doesn’t support vesting. Rest
                    assured, the total cost matches the tokenomics plan.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6 px-10">
                    <div className="flex lg:flex-row flex-col   lg:gap-4 gap-2 items-center">
                      <h2 className="lg:text-xl text-base text-[#FF0000] font-normal">
                        Token Supply
                      </h2>
                      <p className="lg:text-xl text-base text-[#1F1F1F]  ">
                        10,000,000,000
                      </p>
                    </div>
                    <div className="flex lg:flex-row flex-col   lg:gap-4 gap-2 items-center">
                      <h2 className="lg:text-xl text-base text-[#FF0000] font-normal">
                        Fully Diluted Value (US$)
                      </h2>
                      <p className="lg:text-xl text-base text-[#1F1F1F]  ">
                        3,000,000.00
                      </p>
                    </div>
                    <div className="flex lg:flex-row flex-col   lg:gap-4 gap-2 items-center">
                      <h2 className="lg:text-xl text-base text-[#FF0000] font-normal">
                        Listing price (US$)
                      </h2>
                      <p className="lg:text-xl text-base text-[#1F1F1F]  ">
                        0.0003
                      </p>
                    </div>
                    <div className="flex lg:flex-row flex-col   lg:gap-4 gap-2 items-center">
                      <h2 className="lg:text-xl text-base text-[#FF0000] font-normal">
                        Initial Market Cap(US$)
                      </h2>
                      <p className="lg:text-xl text-base text-[#1F1F1F]  ">
                        420,000.00
                      </p>
                    </div>
                  </div>
                  <div className=" relative lg:block hidden">
                    <div className="absolute left-0 pl-[21px] pt-[8px] ">
                      <img
                        src="./images/liveRightNow.png"
                        alt=" "
                        className="w-56"
                      />
                    </div>
                  </div>
                  <div className="px-10">
                    <div className="mt-12">
                      <img src="/images/table.png" alt="" />
                    </div>
                  </div>
                </div>
              )
            }
          />
        )}
      </section>
      <section className="h-[40vh] relative lg:block hidden">
        <div className="flex justify-center items-center h-full pt-10 absolute top-16 w-full">
          <h1 className=" text-[48px] leading-[48.61px] text-center lg:max-w-[665px] ">
            10% of all revenue will be dedicated to supporting those in need...
          </h1>
        </div>
      </section>
    </div>
  );
}
