import { useState } from "react";

const HowItWorks = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [clickedPrevious, setClickedPrevious] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleNext = () => {
    const audio = new Audio("/audio/button.mp3");
    audio.play();
    setDirection("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop back to 0
    // Trigger the animation
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset animation after 200ms
  };

  const handlePrevious = () => {
    const audio = new Audio("/audio/button.mp3");
    audio.play();
    setDirection("prev");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length // Loop back to last item
    );
    // Trigger the animation
    setClickedPrevious(true);
    setTimeout(() => setClickedPrevious(false), 200); // Reset animation after 200ms
  };

  return (
    <div
      className="carousel-container relative  overflow-hidden  border-[8px] border-[#000] lg:h-[550px] h-full  lg:w-[453px] w-full bg-[#FF0000]   py-8 flex flex-col"
      style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
    >
      <h2 className="text-2xl text-[#FFC727]  px-4">Where we invest in </h2>
      {/* Carousel Items */}
      <div
        className={`carousel-items flex transition-transform duration-500 ease-in-out w-full ${
          direction === "next" ? "transform translate-x-[-100%]" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // This moves the content by 100% of the container width
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-full overflow-hidden"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Carousel Navigation */}

      {/* Carousel Counter */}
      <div className="lg:absolute relative lg:bottom-8  flex  text-white text-xl items-center justify-between w-[80%]  px-4">
        <div className=" flex gap-6  items-center">
          <button
            onClick={handlePrevious}
            className={`  text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
              clickedPrevious ? "scale-95" : ""
            }`}
            style={{ boxShadow: "8px 8px 0px 0px #000000" }}
          >
            <img src="/images/carouselButton.png" alt="" />
          </button>
          <button
            onClick={handleNext}
            className={`  text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
              clicked ? "scale-95" : ""
            }`}
            style={{ boxShadow: "8px 8px 0px 0px #000000" }}
          >
            <img src="/images/carouselButton2.png" alt="" />
          </button>
        </div>
        <div>
          {currentIndex + 1}/{items.length}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
