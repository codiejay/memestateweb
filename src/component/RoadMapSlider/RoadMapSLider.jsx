// import Slider from "react-slick";
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
  return (
    <div className="relative lg:px-0 px-3  h-full">
      <div className="flex lg:flex-row flex-col justify-center lg:items-start gap-9 items-center  h-full">
        <GlassCard
          content={
            <ul className="lg:px-6 lg:py-10 px-3 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-base font-normal">
                Designed gamified strategies and integrated ongoing game
                features.
              </li>
              <li className="text-base font-normal">
                Developed new game concepts using the Octalysis Framework.
              </li>
              <li className="text-base font-normal">
                Defined game structure, meta-game features, and loops.
              </li>
              <li className="text-base font-normal">
                Built a multiplayer MVP with mechanics like property management
                and bankruptcy.
              </li>
              <li className="text-base font-normal">
                Established UX/UI design, game economy balance, and P2E
                sustainability.
              </li>
              <li className="text-base font-normal">
                Created concept art for characters, board, and environments.
              </li>
              <li className="text-base font-normal">
                {" "}
                Modeled, rigged, and animated 3D characters and environments.
              </li>
            </ul>
          }
          image={"road1.png"}
          maxWidth={"334px"}
        />

        <GlassCard
          content={
            <ul className="lg:px-10 lg:py-10 px-3 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-base font-normal">
                Presale Token launch Game Soft Launch on Webgl and Mobile
              </li>
              <li className="text-base font-normal">
                Introduction of revenue-generating features like advertising and
                prize table model
              </li>
            </ul>
          }
          image={"road3.png"}
          maxWidth={"334px"}
        />

        <GlassCard
          content={
            <ul className="lg:px-10 lg:py-10 px-3 flex flex-col gap-6 font-poppins text-lg font-normal list-disc">
              <li className="text-base font-normal">
                AR/VR characters powered by Gen AI - bring your meme to life!
              </li>
              <li className="text-base font-normal">
                Implement community-led growth game strategies
              </li>
              <li className="text-base font-normal">
                Guild & Real Estate roll out Co-ownership of “luxury properties”
                for Top-performing players
              </li>
              <li className="text-base font-normal">
                New special arenas where players can compete using unique
                collaterals Sponsored Esports events
              </li>
              <li className="text-base font-normal">
                Sponsored Esports events
              </li>
            </ul>
          }
          image={"road4.png"}
          maxWidth={"334px"}
        />
      </div>
      <div className="h-24"></div>
    </div>
  );
};

export default RoadMapSlider;
