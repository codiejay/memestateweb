import { useEffect, useRef } from "react";
import Button from "./component/Button/Button";
import CountDown from "./component/CountDown/CountDown";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import MarqueeComponent from "./component/MarqueeComponent/MarqueeComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { carouselItems, howToPlay, socialFooterIcon } from "./utils";
import HowToPlay from "./component/HowToPlay/HowToPlay";
import RoadMapCard from "./component/RoadMapCard/RoadMapCard";
import AdvertisementSlick from "./component/AdvertismentSlick/AdvertismentSlick";
import RewardSystem from "./component/RewardSystem/RewardSystem";
import VideoModal from "./component/VideoModal/VideoModal";
import { useModal } from "./context/VideoContext";
import ButtonWithSound from "./component/Button/Button";
import IFrameModal from "./component/IFrameModal/IFrameModal";
import { useIframeModal } from "./context/IframeContext";
import WhyIsPriceDifferent from "./component/WhyIsPriceDifferent/WhyIsPriceDifferent";
import { useDifferentPrize } from "./context/WhyIsPriceDifferentContext";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { openModal, isOpen } = useModal();
  const { openModal: openIFrameModal, isOpen: isIframeOpen } = useIframeModal();
  const { openModal: openPrizeModal, isOpen: isOpenPrizeModal } =
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

  return (
    <div ref={container}>
      <section className=" z-50    banner bg-[url('/images/bgImage.png')]  bg-cover  w-full bg-no-repeat  bg-center relative h-screen overflow-hidden">
        <div className="h-full  flex justify-center items-center flex-col  bannerContent pt-32  ">
          <div className="grid lg:grid-cols-2 justify-between items-center px-20 py-10 gap-20">
            <div className=" flex flex-col  justify-center items-center">
              <div className="banner-content flex w-full ">
                <img
                  src="/images/bannerContent.png"
                  alt=""
                  className="w-[80%] bannerImg"
                />
              </div>
              <p className="text-xl font-bold text-[#EEEFFF]   banner-content font-poppins mt-5 mb-8">
                Secure $GEMS at exclusive presale pricing and maximize your ROI
                while powering the first sustainable P2E model, merging fun and
                financial potential.
              </p>

              <div className="flex lg:flex-row flex-col  items-start w-full  gap-5   ">
                <div className="banner-content">
                  <ButtonWithSound
                    type={"beta"}
                    soundPath={"/audio/button.mp3"}
                    label={"Join the Presale now"}
                    className={"bg-[#FF0000]"}
                    onClick={openIFrameModal}
                  />
                </div>

                <div className="banner-content">
                  <Button
                    type={"alpha"}
                    soundPath={"/audio/button2.mp3"}
                    label={"Founder’s Explainer"}
                    onClick={openModal}
                  />
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
                      <div className="absolute top-[7rem] left-1/2 -translate-x-1/2  countdownStyle w-[82%]  ">
                        <CountDown />
                      </div>
                      <div className="border-[#000] border-[12px] shadow-black-custom  bg-[#9D9FD8] flex justify-center items-center flex-col  mt-10 px-6 py-6  h-fit ">
                        <div className="text-black text-center flex justify-center items-center gap-4 my-6">
                          <p className="lg:text-3xl text-2xl">1 $GEMS</p>{" "}
                          <img src="/images/equals.svg" alt="" />
                          <p className="lg:text-3xl text-2xl">0.001 USDT</p>
                        </div>

                        <div className="w-full flex flex-col gap-5">
                          <div className="w-full">
                            <ButtonWithSound
                              label={"Buy $GEMS"}
                              type={"beta"}
                              soundPath={"/audio/button.mp3"}
                              className={"bg-[#FF0000]  w-full"}
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

      {/* <section
        className="bg-[#27297A] lg:px-14 px-3  section-2 py-5 relative page   h-full hidden "
        ref={sectionRefs[1]}
      >
        <div className=" flex-col mb-4   items-center lg:items-start justify-start flex lg:hidden pt-14">
          <h1 className="text-white font-normal capitalize mb-2 text-3xl">
            Join the
          </h1>
          <div>
            <img
              src="/images/memestate.png"
              alt=""
              className="lg:h-20  h-16 object-contain"
            />
          </div>
          <h1 className="text-white font-normal capitalize mt-1  text-3xl">
            Presale
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 flex-col lg:gap-28 gap-9 py-8 justify-center howItWorks ">
          <div className="w-full overflow-hidden lg:px-0 px-6  lg:order-1 order-2">
            <div className=" flex-col mb-4   items-center lg:items-start justify-start hidden lg:flex">
              <h1 className="text-white font-normal capitalize mb-2 text-3xl">
                Join the
              </h1>
              <div>
                <img
                  src="/images/memestate.png"
                  alt=""
                  className="lg:h-14  h-16 object-contain"
                />
              </div>
              <h1 className="text-white font-normal capitalize mt-1 mb-5  text-3xl">
                Presale
              </h1>
            </div>
            <HowItWorks items={carouselItems} />
          </div>
          <div className="relative  flex justify-end lg:mt-0 mt-4 w-full lg:order-2 order-1">
            <div className="absolute top-[-3rem] -left-28 z-50 lg:block hidden ">
              <img src="/images/bigDiamond.png" alt="" />
            </div>
            <div className="  lg:w-fit  w-full">
              <div className=" w-full relative">
                <div className="border-[#000] border-[12px] shadow-black-custom  py-4 h-fit bg-[#9D9FD8] flex justify-center items-center ">
                  <h1 className="text-black text-center  lg:text-[36px] text-xl    px-2 leading-9">
                    Buy your $gems Token in presale now!
                  </h1>
                </div>
                <div className="absolute top-[7rem] left-1/2 -translate-x-1/2  countdownStyle w-[80%]  ">
                  <CountDown />
                </div>
                <div className="border-[#000] border-[12px] shadow-black-custom  bg-[#9D9FD8] flex justify-center items-center flex-col  mt-10 px-6 py-12  h-fit ">
                  <div className="text-black text-center flex justify-center items-center gap-4 my-6">
                    <p className="lg:text-3xl text-2xl">1 $GEMS</p>{" "}
                    <img src="/images/equals.svg" alt="" />
                    <p className="lg:text-3xl text-2xl">0.001 USDT</p>
                  </div>

                  <div className="w-full flex flex-col gap-5">
                    <div className="w-full">
                      <ButtonWithSound
                        label={"Buy $GEMS"}
                        type={"beta"}
                        soundPath={"/audio/button.mp3"}
                        className={"bg-[#FF0000]  w-full"}
                        onClick={openIFrameModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-9  lg:block hidden">
                <h3 className="text-xl font-normal text-[#FFC727]">
                  Presale Rounds
                </h3>
                <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-3">
                  <li>
                    <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                      Stage 1{" "}
                      <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins ">
                        Ongoing
                      </span>
                    </h2>
                    <p className="text-sm font-normal text-white font-poppins">
                      Up to 200,000,000 $GEMS up for grabs at 67% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 2</h2>
                    <p className="text-sm font-normal text-white font-poppins">
                      Up to 300,000,000 $GEMS up for grabs at 50% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 3</h2>
                    <p className="text-sm font-normal text-white font-poppins">
                      Up to 400,000,000 $GEMS up for grabs at 33% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 4</h2>
                    <p className="text-sm font-normal text-white font-poppins">
                      Up to 500,000,000 $GEMS up for grabs at 25% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 5</h2>
                    <p className="text-sm font-normal text-white font-poppins">
                      Up to 600,000,000 $GEMS up for grabs at 25% discount
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9  lg:hidden block">
          <h3 className="text-2xl font-normal text-[#FFC727] lg:text-left text-center">
            Presale Rounds
          </h3>
          <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-0 mt-10">
            <li>
              <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                Stage 1{" "}
                <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins ">
                  OnGoing
                </span>
              </h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 200,000,000 $GEMS up for grabs at 67% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 2</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 300,000,000 $GEMS up for grabs at 50% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 3</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 400,000,000 $GEMS up for grabs at 33% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 4</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 500,000,000 $GEMS up for grabs at 25% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 5</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 600,000,000 $GEMS up for grabs at 25% discount
              </p>
            </li>
          </ul>
        </div>
        <div className="absolute lg:bottom-28 bottom-0 right-0  hidden lg:block">
          <img src="/images/coin.png" alt="" />
        </div>
      </section> */}

      <section
        className="bg-[#27297A] lg:px-14 px-3  section-2 py-5 relative page   h-full "
        ref={sectionRefs[1]}
        id="nextsection"
      >
        <div className="grid lg:grid-cols-5 items-center flex-col  gap-9 py-8 justify-center howItWorks ">
          <div className="w-full overflow-hidden lg:px-0 px-6  col-span-2 ">
            <div className=" flex-col mb-4   items-center lg:items-start justify-start hidden lg:flex">
              <h1 className="text-white font-normal capitalize mb-2 text-[36px]">
                Join the
              </h1>
              <div>
                <img src="/images/memestate.png" alt="" />
              </div>
              <h1 className="text-white font-normal capitalize mt-1 mb-5  text-[48px]">
                Presale
              </h1>
            </div>
          </div>

          <div className="relative  justify-between lg:mt-0 mt-4 w-full col-span-3 ">
            <div className="    w-full ">
              <div className="mt-9  lg:block hidden">
                <div className="flex items-center gap-5 mt-12">
                  <h2 className="text-2xl font-normal text-[#FFC727]">
                    Presale Stage
                  </h2>
                  <button
                    className="underline  text-base font-normal"
                    onClick={openPrizeModal}
                  >
                    Why is price on presale different?
                  </button>
                </div>

                <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-10">
                  <li>
                    <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                      Stage 1{" "}
                      <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins ">
                        Ongoing
                      </span>
                    </h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 200,000,000 $GEMS up for grabs at 67% gain
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 2</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 300,000,000 $GEMS up for grabs at 50% gain
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 3</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 400,000,000 $GEMS up for grabs at 33% gain
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 4</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 500,000,000 $GEMS up for grabs at 25% gain
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 5</h2>
                    <p className="text-2xl font-normal text-white font-poppins">
                      Up to 600,000,000 $GEMS up for grabs at 25% gain
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-9  lg:hidden block">
          <h3 className="text-2xl font-normal text-[#FFC727] lg:text-left text-center">
            Presale Rounds
          </h3>
          <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-0 mt-10">
            <li>
              <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                Stage 1{" "}
                <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins ">
                  OnGoing
                </span>
              </h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 200,000,000 $GEMS up for grabs at 67% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 2</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 300,000,000 $GEMS up for grabs at 50% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 3</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 400,000,000 $GEMS up for grabs at 33% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 4</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 500,000,000 $GEMS up for grabs at 25% discount
              </p>
            </li>
            <li>
              <h2 className="text-white text-2xl font-normal">Stage 5</h2>
              <p className="text-sm font-normal text-white font-poppins">
                Up to 600,000,000 $GEMS up for grabs at 25% discount
              </p>
            </li>
          </ul>
        </div> */}
        <div className=" absolute right-0  -bottom-12">
          <img src="/images/coin.png" alt="" />
        </div>
      </section>
      <section className="bg-[#27297A] lg:px-14 px-3  section-2 py-20 relative page   h-full ">
        <div className="flex justify-center items-center gap-10">
          <div className="">
            <h1>
              10% of all revenue will be dedicated to supporting those in
              need...
            </h1>
            <div className="mt-12">
              <Button
                type={"beta"}
                soundPath={"/audio/button2.mp3"}
                label={"Join The Pre-sale"}
                onClick={openIFrameModal}
                className={"bg-[#FF0000]"}
              />
            </div>
          </div>
          <div className="">
            <HowItWorks items={carouselItems} />
          </div>
        </div>
      </section>
      <section
        className="bg-[#27297A] lg:px-0  px-4  lg:pt-20 h-full pt-24 pb-10 relative overflow-x-hidden page"
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
              <div>
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
        className="bg-[#4F7298] px-16 py-8   border-t-[9px] border-black relative lg:h-screen h-full"
        ref={sectionRefs[4]}
      >
        <div className="absolute lg:-top-20 -top-8 left-1/2 -translate-x-1/2 ">
          <img src="/images/HANGING.png" alt="hanging" />
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-1 w-full  mt-10justify-center items-end">
          <div className="col-span-2 ">
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
              <div className="flex flex-col justify-start items-start my-6 ">
                <img src="/images/rocket.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight lg:mr-24 lg:text-left text-center  ">
                FAST PACED GAMEPLAY:
              </p>
              <p className="text-base font-medium mt-4 font-poppins ">
                Enjoy rapid 5-minute rounds for a fun and manageable experience.
              </p>
            </div>
            <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center">
              <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center  my-6">
                <img src="/images/gold.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight lg:mr-24 lg:text-left text-center  ">
                CLAIM YOUR REWARD:
              </p>
              <p className="text-base font-medium mt-4 font-poppins lg:text-left text-center ">
                Collect reward chests with character shards and gems, and use
                gems to create and customize your guild, with funny Memechance
                and Memeopportunity cards adding humor to the game.
              </p>
            </div>
          </div>
          <div className="col-span-3  justify-center hidden lg:flex">
            <div>
              <img src="/images/foxy.png" alt="" className="w-[350px]" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col lg:justify-end  justify-center lg:items-end items-center">
              <div className="my-6">
                <img src="/images/flash.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight mt-3 mb-2 lg:text-right text-center">
                FEEL THE PROGRESSION
              </p>
              <p className="text-base font-medium mt-4 font-poppins lg:text-right text-center">
                Unlock, level up, and enhance characters with special abilities
                to gain strategic advantages.
              </p>
            </div>
            <div className="flex flex-col lg:justify-end  justify-center lg:items-end items-center mt-10">
              <div className="my-6">
                <img src="/images/cup.png" alt="" />
              </div>
              <p className="text-[28px] font-normal  text-white leading-tight mt-3 mb-2 lg:ml-24 lg:text-right text-center">
                BE THE CHAMPION
              </p>
              <p className="text-base font-medium mt-4 font-poppins lg:text-right text-center">
                Climb leagues and leaderboards to become the Ultimate Memestate
                Champion.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#27297A] px-16 py-2 relative overflow-hidden page"
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
        className="bg-[#27297A] px-16 py-16 relative overflow-hidden  page"
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
      <section className="bg-[#27297A] py-5 px-8 lg:px-0 page" id="roadMap">
        <div className="flex justify-center  ">
          <h1 className="lg:text-[100px] text-5xl font-normal text-white mb-16">
            ROADMAP
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="flex  lg:flex-row flex-col justify-center items-center w-[1200px] relative lg:h-[1685px] lg:pt-[20.4rem] pt-3  lg:gap-0 gap-6">
            <div className="lg:absolute relative lg:left-[6.9rem] lg:top-0">
              <RoadMapCard
                direction={"right"}
                imgLink={"road1.png"}
                content={
                  <ul className="px-8 py-6 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
                    <li>
                      Developed a gamified design strategy and structured
                      ongoing game integration.
                    </li>
                    <li>
                      Brainstormed and designed new game concepts using the
                      Octalysis Framework.
                    </li>
                    <li>
                      Defined and visualized game structure, including meta-game
                      features and game loops.
                    </li>
                  </ul>
                }
              />
            </div>

            <div className="lg:absolute relative lg:left-[6.9rem] lg:top-[54%]">
              <RoadMapCard
                direction={"right"}
                small={true}
                imgLink={"road2.png"}
                content={
                  <ul className="px-8 py-6 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
                    <li>Game Soft Launch on Webgl and Mobile</li>
                    <li>Token airdrop, community sale, and IDO</li>
                    <li>
                      Introduction of revenue-generating features like
                      advertising.
                    </li>
                  </ul>
                }
              />
            </div>
            <div className="w-[5px]  bg-[#FF0000] lg:relative h-full  ">
              <div className="w-[122px] h-[122px] bg-[#FF0000] rounded-full absolute left-1/2 -translate-x-1/2 top-48  justify-center items-center hidden lg:flex">
                <div>
                  <img src="/images/M.png" alt="" />
                </div>
              </div>
              <div className="w-[122px] h-[122px] bg-[#FF0000] rounded-full absolute left-1/2 -translate-x-1/2 top-[45%] hidden lg:flex justify-center items-center">
                <div>
                  <img src="/images/M.png" alt="" />
                </div>
              </div>

              <div className="w-[122px] h-[122px] bg-[#FF0000] rounded-full absolute left-1/2 -translate-x-1/2 bottom-36 hidden lg:flex justify-center items-center">
                <div>
                  <img src="/images/M.png" alt="" />
                </div>
              </div>
            </div>

            <div className="lg:absolute relative lg:right-16 lg:top-[25%]">
              <RoadMapCard
                direction={"left"}
                large={true}
                imgLink={"road3.png"}
                content={
                  <ul className="px-8 py-6 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
                    <li>
                      {" "}
                      Developed a multiplayer MVP with all game mechanics such
                      property management, building renting and bankruptcy.
                    </li>
                    <li>
                      Established the foundation for UX/UI design and game
                      economy balance and P2E sustainability
                    </li>
                    <li>
                      Created concept art for characters, board game, and city
                      environments.
                    </li>
                    <li>
                      3d modelling, rigging & animation of characters and board
                      & environments modelling.
                    </li>
                  </ul>
                }
              />
            </div>

            <div className="lg:absolute relative lg:right-16 lg:-bottom-[22.8rem]">
              <RoadMapCard
                direction={"left"}
                imgLink={"road5.png"}
                content={
                  <ul className="px-8 pt-14 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
                    <li>
                      {" "}
                      Launch of AR/VR characters with Gen AI and community-led
                      growth strategies.
                    </li>
                    <li>
                      Rollout of guilds, real estate features, and co-ownership
                      of luxury properties for top players
                    </li>
                    <li>New special arenas and sponsored eSports events.</li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
        {isOpen && <VideoModal />}
        {isIframeOpen && <IFrameModal />}
        {isOpenPrizeModal && <WhyIsPriceDifferent />}
      </section>
    </div>
  );
}
