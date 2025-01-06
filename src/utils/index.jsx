import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const carouselItems = [
  <div key="0" className="w-100% my-8 px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/Tag.png" alt="Image 1" className=" h-[78px]" />
      </div>
      <h2 className="text-[32px] text-white my-3">
        {" "}
        Liquidity and Token Stability
      </h2>

      <p className="lg:text-2xl text-base font-normal  text-white  mt-3 font-poppins ">
        To Ensure sufficient liquidity to support smooth trading and token
        utility.
      </p>
    </div>
  </div>,
  <div key="1" className="w-100% my-8 px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/gamedice.png" alt="Image 1" className=" h-[78px]" />
      </div>
      <h2 className="text-[32px] text-white my-1">
        Game Development and Expansion
      </h2>

      <p className="lg:text-2xl text-base font-normal  text-white  mt-3  font-poppins">
        To Enhance gameplay experience and Integrate advanced gamified mechanics
        to attract players.
      </p>
    </div>
  </div>,
  <div key="2" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/wallet.png" alt="Image 2" className=" h-[78px]" />
      </div>
      <h2 className="text-[32px] text-white my-1">
        Marketing and User Acquisition
      </h2>

      <p className="lg:text-2xl font-normal  text-white  mt-3  font-poppins ">
        To drive awareness and adoption through targeted campaigns to onboard
        more players/investors into the ecosystem.
      </p>
    </div>
  </div>,
];
export const howToPlay = [
  <div key={"1"} className=" h-full ">
    <div className="flex flex-col items-center justify-between h-full">
      <img src="./images/step1.png" alt="" />
    </div>
  </div>,
  <div key={"2"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <img src="./images/step2.png" alt="" />
    </div>
  </div>,
  <div key={"3"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <img src="./images/step3.png" alt="" />
    </div>
  </div>,
  <div key={"4"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <img src="./images/step4.png" alt="" />
    </div>
  </div>,
];

export const advertisement = [
  <div key={"1"}>
    <div className="flex justify-center items-center  gap-10 py- px-32">
      <div>
        <img src="/images/advert1.png" alt="" width={"365px"} />
      </div>
      <div>
        <img src="/images/advert2.png" alt="" width={"365px"} />
      </div>
    </div>
  </div>,
  <div key={"2"}>
    <div className="flex justify-center items-center  gap-10 py- px-32">
      <div>
        <img src="/images/advert3.png" alt="" width={"365px"} />
      </div>
      <div>
        <img src="/images/advert4.png" alt="" width={"365px"} />
      </div>
    </div>
  </div>,
];
export const socialFooterIcon = [
  {
    name: "X",
    icon: "/images/fX.svg",
    link: "https://x.com/memestate_",
  },

  {
    name: "Youtube",
    icon: "/images/fY.svg",
    link: "https://www.youtube.com/@memestatep2",
  },
  {
    name: "Tiktok",
    icon: "/images/fTT.svg",
    link: "https://www.tiktok.com/@memestatep2e",
  },
];
export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export const contentList = [
  {
    title: (
      <h2 className="lg:text-[64px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-5 mt-16 lg:text-left text-center">
        Growing User <br className="lg:block  hidden" /> Base
      </h2>
    ),

    text: (
      <p className="max-w-md font-poppins my-5 lg:text-2xl text-base lg:text-left text-center">
        Join the growing Memestate community and turn every dice roll into a
        thrilling experience!
      </p>
    ),
    image: "/images/meme00.gif",
  },
  {
    title: (
      <h2 className="lg:text-[64px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-5 mt-16 lg:text-left text-center">
        increased advertisement
        <br className="lg:block  hidden" />
        demand and prize table volume
      </h2>
    ),

    text: (
      <p className="max-w-md font-poppins my-5 lg:text-2xl text-base lg:text-left text-center">
        Drive ad demand with targeted placements tied to user activity and
        community engagement.
      </p>
    ),
    image: "/images/meme1.gif",
  },
  {
    title: (
      <h2 className="lg:text-[64px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-5 mt-16 lg:text-left text-center">
        increased advertisement
        <br className="lg:block  hidden" />
        AND GAME REVENUE
      </h2>
    ),

    text: (
      <p className="max-w-md font-poppins my-5 lg:text-2xl text-base lg:text-left text-center">
        Drive ad demand with targeted placements tied to user activity and
        community engagement.
      </p>
    ),
    image: "/images/meme2.gif",
  },
  {
    title: (
      <h2 className="lg:text-[64px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-5 mt-16 lg:text-left text-center">
        bigger rewards pool for
        <br className="lg:block  hidden" />
        free players
      </h2>
    ),

    text: (
      <p className="max-w-md font-poppins my-5 lg:text-2xl text-base lg:text-left text-center">
        Unlock bigger rewards for free players with community-driven prize
        pools. Boost participation through play-to-earn opportunities and token
        incentives.
      </p>
    ),
    image: "/images/meme3.gif",
  },
  {
    title: (
      <h2 className="lg:text-[64px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-5 mt-16 lg:text-left text-center">
        bigger rewards pool for
        <br className="lg:block  hidden" />
        free players
      </h2>
    ),

    text: (
      <p className="max-w-md font-poppins my-5 lg:text-2xl text-base lg:text-left text-center">
        Unlock bigger rewards for free players with community-driven prize
        pools. Boost participation through play-to-earn opportunities and token
        incentives.
      </p>
    ),
    image: "/images/meme4.gif",
  },
];

// export const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use a timeout to ensure the scroll happens after rendering
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto", // Use "smooth" if smooth scrolling is desired
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
