import { useEffect, useState } from "react";

const HowToPlay = ({ items }) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    }, 3000); // 3 seconds interval
    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  return (
    <div className="carousel-container relative  overflow-hidden my-10 ">
      <div className="flex justify-center items-center lg:gap-14 gap-0">
        <div>
          <button
            onClick={handlePrevious}
            className={` hidden md:flex text-2xl  font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]   justify-center items-center transition-all transform ${
              clickedPrevious ? "scale-95" : ""
            }`}
            style={{ boxShadow: "8px 8px 0px 0px #000000" }}
          >
            <img src="/images/carouselButton.png" alt="" />
          </button>
        </div>
        <div className="relative  flex justify-center overflow-hidden">
          <div className="absolute top-[7%]  lg:h-full h-[unset] rounded-[41px] w-[91%] overflow-hidden ">
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
          </div>

          <img src="/images/device.png" alt="" />
        </div>
        <div>
          <button
            onClick={handleNext}
            className={` hidden md:flex text-2xl font-normal text-white  capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  justify-center items-center transition-all transform ${
              clicked ? "scale-95" : ""
            }`}
            style={{ boxShadow: "8px 8px 0px 0px #000000" }}
          >
            <img src="/images/carouselButton2.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
