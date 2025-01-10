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
         $210,000 of the $416,000 raised will be allocated to the initial
        liquidity pool to ensure smooth trading and token stability.
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
        Over $150,000 will be used to complete game development, with 50% of the
        work already finished and paid for.
      </p>
    </div>
  </div>,
  <div key="2" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/wallet.png" alt="Image 2" className=" h-[78px]" />
      </div>
      <h2 className="text-[32px] text-white my-1">Marketing and Growth</h2>

      <p className="lg:text-2xl font-normal  text-white  mt-3  font-poppins ">
        The rest of the funds will be used for marketing campaigns to boost
        awareness, attract players and investors, and grow the ecosystem.
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
      <h2 className="lg:text-[48px] text-xl font-normal text-white lg:leading-[4rem] lg:my-3 lg:  lg:text-left text-center">
        Growing User Base
      </h2>
    ),

    text: (
      <p className="max-w-2xl font-poppins my-5  text-[14px] lg:text-left text-center">
        As more players join the Memestate community, the ecosystem grows
        stronger. Every new player adds to the excitement and engagement,
        creating a vibrant and competitive environment. A larger user base means
        more activity across the platform, driving interaction, retention, and
        overall value for both players and the ecosystem.
      </p>
    ),
    image: "/images/meme00.gif",
  },
  {
    title: (
      <h2 className="lg:text-[48px] text-xl font-normal text-white lg:leading-[4rem] lg:my-3  lg:text-left text-center">
        increased advertisement demand and prize table volume
      </h2>
    ),

    text: (
      <p className="lg:max-w-xl font-poppins my-5  text-base lg:text-left text-center">
        The reward pool is directly funded by 100% of advertising revenue and
        50% of prize table revenue. As the user base grows, demand for ad
        placements increases, since advertisers target a more engaged and active
        audience. Additionally, free players who earn rewards are incentivized
        to use their winnings to participate in the prize table, which drives up
        prize table volume and generates even more revenue. This dynamic creates
        a cycle where player engagement fuels both ad demand and prize table
        growth.
      </p>
    ),
    image: "/images/meme1.gif",
  },
  {
    title: (
      <h2 className="lg:text-[48px] text-xl font-normal text-white lg:leading-[4rem] lg:my-3  lg:text-left text-center">
        increased advertisement AND <br className="lg:block hidden" /> GAME
        REVENUE
      </h2>
    ),

    text: (
      <p className="lg:max-w-xl font-poppins my-5  text-[14px] lg:text-left text-center">
        The integration of strategic ad placements ensures higher ad revenue as
        the user base grows. These ads are seamlessly tied to gameplay and
        community activity, making them relevant and engaging. At the same time,
        the game itself generates revenue through play-to-earn mechanics,
        in-game purchases, and participation fees for the prize table. This
        dual-revenue system ensures that both the game and the ecosystem remain
        profitable and sustainable while continuing to grow.
      </p>
    ),
    image: "/images/meme2.gif",
  },
  {
    title: (
      <h2 className="lg:text-[48px] text-xl font-normal text-white lg:leading-[4rem] lg:my-3  lg:text-left text-center">
        Bigger Rewards Pool for Free Player
      </h2>
    ),

    text: (
      <p className="lg:max-w-xl font-poppins my-5  text-[14px] lg:text-left text-center">
        With 100% of advertising revenue and 50% of prize table revenue feeding
        the reward pool, free players benefit from progressively larger rewards
        as the system grows. These increased rewards encourage participation, as
        free players are drawn to the opportunity to earn and reinvest their
        winnings. By using their rewards to compete on the prize table, they
        further boost prize table volume, which in turn increases overall
        revenue and feeds back into the reward system.
      </p>
    ),
    image: "/images/meme3.gif",
  },
  {
    title: (
      <h2 className="lg:text-[48px] text-xl font-normal text-white lg:leading-[4rem] lg:my-3  lg:text-left text-center">
        A Continuous Upward Spiral
      </h2>
    ),

    text: (
      <p className="lg:max-w-xl font-poppins my-5  text-[14px] lg:text-left text-center">
        The reward system is designed to be self-reinforcing. Increased rewards
        attract more players, who boost engagement and revenue through ad views,
        prize table participation, and in-game purchases. This additional
        revenue feeds back into the reward pool, creating bigger prizes and
        greater incentives for new and existing players. This cycle of growth
        and reinvestment leads to a continuous upward spiral, driving the
        Memestate ecosystem to new heights.
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
