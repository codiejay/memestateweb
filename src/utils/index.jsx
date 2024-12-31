import { useEffect, useState } from "react";

export const carouselItems = [
  <div key="1" className="w-100% my-8 px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/wallet.png" alt="Image 1" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-3">Early Access, big savings</h2>
      <p className="text-lg font-normal text-white my-1 ">
        Grab $GEM tokens at discounted <br /> rates across three rounds.
      </p>
      <p className="text-lg font-normal  text-white my-1">
        The earlier you buy, the more you <br /> save!
      </p>
    </div>
  </div>,
  <div key="2" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/flexedBiceps.png" alt="Image 2" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-3">Exclusive Rewards</h2>

      <p className="text-lg font-normal  text-white my-1">
        Unlock premium in-game items, perks, and unique bonuses.
      </p>
    </div>
  </div>,
  <div key="3" className="w-100% my-8  px-4">
    <div className="flex flex-col">
      <div>
        <img src="/images/flyingMoney.png" alt="Image 1" className=" w-28" />
      </div>
      <h2 className="text-[28px] text-white my-3">Fund the Future</h2>
      <p className="text-lg font-normal text-white my-1 ">
        Your contributions will support game development, marketing, and
        sustainable rewards for players.
      </p>
    </div>
  </div>,
];
export const howToPlay = [
  <div key={"1"} className=" h-full ">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white">STEP 1</h1>
      <div className="border-4 border-black bg-white shadow-black-custom w-[380px]">
        <p className="text-black py-2 px-3 text-center">
          You have 2 choices...Play the free game and win some $GEMS token OR
          get some $GEMS token and put them on the line and win big
        </p>
      </div>
    </div>
  </div>,
  <div key={"2"} className=" h-full">
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-[48px] font-normal text-white">STEP 2</h1>
      <div className="border-4 border-black bg-white shadow-black-custom w-[380px] py-2 px-3">
        <p className="text-black text-center">
          Buy $GEMS and exchange for Gems you can use in the game
        </p>
        e
      </div>
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
