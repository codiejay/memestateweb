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
import Navbar, { links } from "./component/Navbar/Navbar";
import AdvertisementSlick from "./component/AdvertismentSlick/AdvertismentSlick";
import RewardSystem from "./component/RewardSystem/RewardSystem";
import VideoModal from "./component/VideoModal/VideoModal";
import { useModal } from "./context/VideoContext";
import ButtonWithSound from "./component/Button/Button";
import IFrameModal from "./component/IFrameModal/IFrameModal";
import { useIframeModal } from "./context/IframeContext";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { openModal, isOpen } = useModal();
  const { openModal: openIFrameModal, isOpen: isIframeOpen } = useIframeModal();
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

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [isScrolling, setIsScrolling] = useState(false);

  // const isDesktop = () => window.innerWidth > 1024;

  // const scrollToSection = (direction) => {
  //   const nextIndex = currentIndex + direction;

  //   // Allow free scrolling for out-of-bound or non-referenced sections
  //   if (nextIndex < 0 || nextIndex >= sectionRefs.length) {
  //     setCurrentIndex(nextIndex);
  //     return;
  //   }

  //   const nextSection = sectionRefs[nextIndex].current;

  //   if (nextSection) {
  //     setIsScrolling(true);
  //     nextSection.scrollIntoView({ behavior: "smooth" });

  //     // Delay updating the index until scrolling completes
  //     setTimeout(() => {
  //       setCurrentIndex(nextIndex);
  //       setIsScrolling(false);
  //     }, 600); // Match smooth scrolling duration
  //   }
  // };

  // const handleScroll = (e) => {
  //   if (isScrolling || !isDesktop()) return; // Skip if already scrolling or on mobile/tablet

  //   const direction = e.deltaY > 0 ? 1 : -1;
  //   scrollToSection(direction);
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (!isDesktop()) {
  //       // Reset state for regular scrolling on mobile/tablet
  //       setCurrentIndex(0);
  //       setIsScrolling(false);
  //     }
  //   };

  //   const handleWheel = (e) => handleScroll(e);

  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [currentIndex, isScrolling]);
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

  // useEffect(() => {
  //   const animateCards = () => {
  //     // Select all cards
  //     const cards = document.querySelectorAll(".masked-div-1, .masked-div-2");

  //     cards.forEach((card) => {
  //       const isLeft = card.classList.contains("masked-div-1");
  //       const text = card.querySelectorAll("h2, p"); // Text elements
  //       const image = card.querySelector("img"); // Image elements

  //       // Animation timeline for each card
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: card,
  //           start: "top 80%", // Start animation when card is 80% visible
  //           end: "bottom 20%", // End animation when card is almost out of view
  //           toggleActions: "play none none reverse", // Play forward on enter, reverse on leave
  //         },
  //       });

  //       // Add animations
  //       tl.fromTo(
  //         card,
  //         {
  //           x: isLeft ? -200 : 200, // Slide left or right based on class
  //           opacity: 0,
  //         },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           duration: 1,
  //           ease: "power3.out",
  //         }
  //       )
  //         .fromTo(
  //           image,
  //           {
  //             scale: 0,
  //           },
  //           {
  //             scale: 1,
  //             duration: 0.8,
  //             ease: "power3.inOut",
  //           },
  //           "<" // Start at the same time as the previous animation
  //         )
  //         .fromTo(
  //           text,
  //           {
  //             y: -50,
  //             opacity: 0,
  //           },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.8,
  //             stagger: 0.2, // Animate each text element with a slight delay
  //           },
  //           "-=0.5" // Overlap the text fade-in with image scaling
  //         );
  //     });
  //   };

  //   animateCards();
  // }, []);

  return (
    <div id="container" ref={container}>
      <section className=" z-50    banner bg-[url('/images/bgImage.png')]  bg-cover  w-full bg-no-repeat  bg-center relative h-screen">
        <div className="h-full  flex justify-center items-center flex-col  bannerContent pt-44  ">
          {/* <Navbar /> */}

          <div className="banner-content ">
            <img
              src="/images/bannerContent.png"
              alt=""
              className="w-[590px] bannerImg"
            />
          </div>
          <p className="text-2xl font-bold text-[#EEEFFF] text-center banner-content">
            Unleash the power of memes and earn rewards.
          </p>

          <div className="flex lg:flex-row flex-col justify-center  items-center gap-5 mt-6  ">
            <div className="banner-content">
              <ButtonWithSound
                type={"beta"}
                soundPath={"/audio/button.mp3"}
                label={"watch Demo"}
                className={"bg-[#FF0000]"}
                onClick={openModal}
              />
            </div>

            <div className="banner-content">
              <Button
                type={"alpha"}
                soundPath={"/audio/button2.mp3"}
                label={"Join Pre-sale"}
                onClick={openIFrameModal}
              />
            </div>
          </div>
          <div className="mt-auto ">
            {/* <div className="w-full   bg-[#53224D] h-4"></div> */}
            <MarqueeComponent />
          </div>
        </div>
      </section>

      <section
        className="bg-[#27297A] lg:px-14 px-3  section-2 py-5 relative page h-screen overflow-hidden"
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
              <h1 className="text-white font-normal capitalize mt-1  text-3xl">
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
                <div className="absolute top-[7rem] lg:left-1/2 -translate-x-1/2 left-0 countdownStyle w-[80%]  ">
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
                <ul className=" grid lg:grid-cols-3 grid-cols-1  gap-5 lg:flex-nowrap   justify-between lg:mt-0 mt-10">
                  <li>
                    <h2 className="text-2xl font-normal text-[#E5B323] flex items-center gap-3">
                      Stage 1{" "}
                      <span className=" w-[64px] bg-[#FF0000] rounded-[13px] text-xs px-1 py-[1px] text-white font-poppins ">
                        OnGoing
                      </span>
                    </h2>
                    <p className="text-sm font-normal text-white">
                      Up to 200,000,000 $GEMS up for grabs at 67% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 2</h2>
                    <p className="text-sm font-normal text-white">
                      Up to 300,000,000 $GEMS up for grabs at 50% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 3</h2>
                    <p className="text-sm font-normal text-white">
                      Up to 400,000,000 $GEMS up for grabs at 33% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 4</h2>
                    <p className="text-sm font-normal text-white">
                      Up to 500,000,000 $GEMS up for grabs at 25% discount
                    </p>
                  </li>
                  <li>
                    <h2 className="text-white text-2xl font-normal">Stage 5</h2>
                    <p className="text-sm font-normal text-white">
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
          <ul className=" grid lg:grid-cols-3 grid-cols-1   lg:flex-nowrap   lg:justify-between  justify-center lg:mt-0 mt-10">
            <li>
              <h2 className="text-white text-[32px] font-normal lg:text-left text-center ">
                Round 1
              </h2>
              <p className="text-base font-normal text-white lg:text-left text-center ">
                Lowest $GEM price + <br className="lg:block hidden" /> exclusive
                bonuses.
              </p>
            </li>
            <li>
              <h2 className="text-white text-[32px] font-normal lg:text-left text-center ">
                Round 2
              </h2>
              <p className="text-base font-normal text-white lg:text-left text-center ">
                Lowest $GEM price + <br className="lg:block hidden" /> exclusive
                bonuses.
              </p>
            </li>
            <li>
              <h2 className="text-white text-[32px] font-normal lg:text-left text-center ">
                Round 3
              </h2>
              <p className="text-base font-normal text-white lg:text-left text-center ">
                Final chance before <br className="lg:block hidden" /> public
                launch.
              </p>
            </li>
          </ul>
        </div>
        <div className="absolute lg:bottom-28 bottom-0 right-0  hidden lg:block">
          <img src="/images/coin.png" alt="" />
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
            How to play
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
                imgLink={"road1.png"}
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
      </section>

      <section className="min-h-screen bg-[#27297A]  ">
        <div className="bg-[url('/images/footer.png')] bg-no-repeat w-full bg-cover h-full flex justify-center items-center pt-20 footer overflow-hidden flex-col bg-[#27297A]">
          <div className="mt-[16rem]">
            <img src="/images/memeanddice.png" alt="" />
          </div>
          <nav>
            <ul
              className={`flex flex-col md:flex-row md:justify-center my-3 gap-6 md:gap-12  md:flex`}
            >
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-xl md:text-2xl font-normal text-white"
                >
                  <a
                    href={link.link}
                    className="text-white text-shadow-custom text-4xl"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 justify-center my-3">
            {socialFooterIcon.map((icon, index) => (
              <a href={icon.link} key={index}>
                <img src={icon.icon} alt={icon.name} />
              </a>
            ))}
          </div>
          <div className="flex justify-center my-8 flex-col items-center">
            <div className=" border-y-2 border-white flex justify-center py-6 lg:max-w-[1270px]">
              <p className="lg:text-[25px] text-lg  text-white font-medium leading-[37.5px] font-poppins text-center lg:px-0 px-4">
                Join us in reshaping the future of board games and digital
                ownership. rollthe dice, conquer the board and become the
                ultimate memestate champion.
              </p>
            </div>

            <p className="lg:text-[17px] text-lg font-normal text-center font-poppins lg:max-w-[1191px] my-8 lg:px-0 px-4">
              Disclaimer: We are not responsible fo r any losses or harms
              sustained by you due to vulnerability or any kind of failure,
              abnormal behavior of software (e.g., smart contract), blockchains,
              or any other features of or inherent to the Digital Assets or
              Items.
            </p>
            <p className="text-[17px] font-bold text-center font-poppins">
              2024 © MEMESTATE. All Rights Reserved.
            </p>
          </div>
        </div>
        {isOpen && <VideoModal />}
        {isIframeOpen && <IFrameModal />}
      </section>
    </div>
  );
}
