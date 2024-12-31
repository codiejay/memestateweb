import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

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
      className={`  button1 text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
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
      className={`  button2 text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform
        
        ${clickedPrevious ? "scale-95" : ""}
        `}
      style={{ boxShadow: "8px 8px 0px 0px #000000" }}
    >
      <img src="/images/carouselButton.png" alt="" />
    </button>
  );
}

const AdvertisementSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    // cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src="/images/advert1.png" alt="" />
        </div>
        <div>
          <img src="/images/advert2.png" alt="" />
        </div>
        <div>
          <img src="/images/advert3.png" alt="" />
        </div>
        <div>
          <img src="/images/advert4.png" alt="" />
        </div>
      </Slider>
      <div className="h-24"></div>
    </div>
  );
};

export default AdvertisementSlick;
