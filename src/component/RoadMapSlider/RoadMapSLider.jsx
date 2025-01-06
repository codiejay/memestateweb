import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import GlassCard from "../GlassCard/GlassCard";

function SampleNextArrow(props) {
  const [clicked, setClicked] = useState(false);
  const { onClick } = props;

  const handleNext = async () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);

    onClick();
    const audio = new Audio("/audio/button.mp3");
    audio.play();
  };
  return (
    <button
      onClick={handleNext}
      className={`  button1 text-xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
        clicked ? "scale-95" : ""
      }`}
      style={{ boxShadow: "8px 8px 0px 0px #000000" }}
    >
      <img src="/images/carouselButton2.png" alt="" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const [clickedPrevious, setClickedPrevious] = useState(false);
  const { onClick } = props;

  const handlePrevious = async () => {
    setClickedPrevious(true);
    setTimeout(() => setClickedPrevious(false), 100);

    onClick();
    const audio = new Audio("/audio/button.mp3");
    audio.play();
  };
  return (
    <button
      onClick={handlePrevious}
      className={`  button2 text-xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform
        
        ${clickedPrevious ? "scale-95" : ""}
        `}
      style={{ boxShadow: "8px 8px 0px 0px #000000" }}
    >
      <img src="/images/carouselButton.png" alt="" />
    </button>
  );
}

const RoadMapSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,

    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative px-10 ">
      {/* <div className="w-full h-1 bg-[#FF0000] absolute top-52 "></div> */}

      <Slider {...settings}>
        <GlassCard
          content={
            <ul className="px-10 py-10 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-xl font-normal">
                Developed a gamified design strategy and structured ongoing game
                integration.
              </li>
              <li className="text-xl font-normal">
                Brainstormed and designed new game concepts using the Octalysis
                Framework.
              </li>
              <li className="text-xl font-normal">
                Defined and visualized game structure, including meta-game
                features and game loops.
              </li>
            </ul>
          }
          image={"road1.png"}
          maxWidth={"334px"}
        />

        <GlassCard
          content={
            <ul className="px-10 py-10 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-xl font-normal">
                Developed a multiplayer MVP with all game mechanics such
                property management, building renting and bankruptcy.
              </li>
              <li className="text-xl font-normal">
                Established the foundation for UX/UI design and game economy
                balance and P2E sustainability
              </li>
              <li className="text-xl font-normal">
                Created concept art for characters, board game, and city
                environments.
              </li>
              <li className="text-xl font-normal">
                3d modelling, rigging & animation of characters and board &
                environments modelling.
              </li>
            </ul>
          }
          image={"road3.png"}
          maxWidth={"523px"}
        />
        <GlassCard
          content={
            <ul className="px-10 py-10 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-xl font-normal">
                Game Soft Launch on Webgl and Mobile
              </li>
              <li className="text-xl font-normal">
                Token airdrop, community sale, and IDO
              </li>
              <li className="text-xl font-normal">
                Introduction of revenue-generating features like advertising.
              </li>
            </ul>
          }
          image={"road2.png"}
          maxWidth={"334px"}
        />

        <GlassCard
          content={
            <ul className="px-10 py-10 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-xl font-normal">
                Launch of AR/VR characters with Gen AI and community-led growth
                strategies.
              </li>
              <li className="text-xl font-normal">
                Rollout of guilds, real estate features, and co-ownership of
                luxury properties for top players
              </li>
              <li className="text-xl font-normal">
                New special arenas and sponsored eSports events.
              </li>
            </ul>
          }
          image={"road4.png"}
          maxWidth={"334px"}
        />
      </Slider>
      <div className="h-24"></div>
    </div>
  );
};

export default RoadMapSlider;
