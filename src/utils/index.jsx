import { useEffect, useState } from "react";

export const carouselItems = [
  <div key="0" className="w-100% my-8 px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/Tag.png" alt="Image 1" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-3"> Biggest Discount</h2>

      <p className="lg:text-lg text-base font-normal  text-white my-1">
        Get $GEMS at $0.0001—a massive 67% discount off the TGE price!
      </p>
    </div>
  </div>,
  <div key="1" className="w-100% my-8 px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/wallet.png" alt="Image 1" className=" w-28" />
      </div>
      <h2 className="text-[24px] text-white my-1">Early Access, big savings</h2>

      <p className="lg:text-lg text-base font-normal  text-white ">
        Be among the first to own $GEMS and dominate Memestate’s ecosystem!
      </p>
    </div>
  </div>,
  <div key="2" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/flexedBiceps.png" alt="Image 2" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-1">Exclusive Rewards</h2>

      <p className="lg:text-lg font-normal  text-white ">
        Unlock premium in-game items, perks, and unique bonuses.
      </p>
    </div>
  </div>,
  <div key="3" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/flyingMoney.png" alt="Image 1" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-1">Fund the Future</h2>
      <p className="lg:text-lg font-normal text-white  ">
        Your contributions will support game development, marketing, and
        sustainable rewards for players.
      </p>
    </div>
  </div>,
];
export const howToPlay = [
  <div key={"1"} className=" h-full ">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white absolute w-full text-center">
        STEP 1
      </h1>
      <img src="./images/step1.png" alt="" />
    </div>
  </div>,
  <div key={"2"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white absolute w-full text-center">
        STEP 2
      </h1>
      <img src="./images/step2.png" alt="" />
    </div>
  </div>,
  <div key={"3"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white absolute w-full text-center">
        STEP 3
      </h1>
      <img src="./images/step3.png" alt="" />
    </div>
  </div>,
  <div key={"4"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white absolute w-full text-center">
        STEP 4
      </h1>
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
    link: "https://www.twitter.com",
  },
  {
    name: "Telegram",
    icon: "/images/fT.svg",
    link: "https://www.linkedin.com",
  },
  {
    name: "Discord",
    icon: "/images/fD.svg",
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: "/images/fY.svg",
    link: "https://www.github.com",
  },
  {
    name: "Tiktok",
    icon: "/images/fTT.svg",
    link: "https://www.twitter.com",
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
      <p className="max-w-md font-poppins my-5 lg:text-xl text-base lg:text-left text-center">
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
      <p className="max-w-md font-poppins my-5 lg:text-xl text-base lg:text-left text-center">
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
      <p className="max-w-md font-poppins my-5 lg:text-xl text-base lg:text-left text-center">
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
      <p className="max-w-md font-poppins my-5 lg:text-xl text-base lg:text-left text-center">
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
      <p className="max-w-md font-poppins my-5 lg:text-xl text-base lg:text-left text-center">
        Unlock bigger rewards for free players with community-driven prize
        pools. Boost participation through play-to-earn opportunities and token
        incentives.
      </p>
    ),
    image: "/images/meme4.gif",
  },
];
