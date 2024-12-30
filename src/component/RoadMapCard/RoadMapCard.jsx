const RoadMapCard = ({ direction, small, large, content, imgLink }) => {
  const renderRightCard = () => {
    return (
      <div className="relative">
        <div className="flex items-center flex-row-reverse">
          <div className="flex  items-center  lg:-ml-28   -mb-4">
            <div className=" hidden lg:block">
              <img
                src="/images/cardHolder.png"
                alt=""
                className="w-[9rem] h-60"
              />
            </div>
            <div className="-ml-8 hidden lg:block ">
              <div className="flex items-center ">
                <div className="w-[57px] h-[57px] rounded-full bg-[#FF0000]"></div>
                <div className="w-[5px] h-[74px] rotate-90 bg-[#FF0000] -ml-2"></div>
              </div>
            </div>
          </div>

          <div
            className={`w-[400px] lg:h-[642px] h-full lg:rounded-none rounded-md   lg:border-0  border-2 border-#fff      ${
              small
                ? "lg:bg-[url('/images/glassCardRightSmall.png')] glassCardStyle "
                : "lg:bg-[url('/images/glassCardRight.png')] glassCardStyle "
            } z-50 `}
          >
            <div className=" justify-center hidden lg:flex">
              <img src={`/images/${imgLink}`} alt="" />
            </div>
            {content}
          </div>
        </div>
      </div>
    );
  };
  const renderLeftCard = () => {
    return (
      <div className="relative">
        <div className="flex items-center">
          <div className="flex  items-center  lg:-mr-16 mt-14">
            <div className="-mr-8 hidden lg:block ">
              <div className="flex items-center ">
                <div className="w-[5px] h-[74px] rotate-90 bg-[#FF0000] -mr-2"></div>
                <div className="w-[57px] h-[57px] rounded-full bg-[#FF0000]"></div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/cardHolder.png"
                alt=""
                className="w-[9rem] h-60"
              />
            </div>
          </div>

          <div
            className={`w-[400px] lg:h-[782px] h-full lg:rounded-none rounded-md   lg:border-0  border-2 border-#fff   ${
              large
                ? "lg:bg-[url('/images/glassCardBig.png')] glassCardStyle"
                : "lg:bg-[url('/images/glassCard.png')] glassCardStyle "
            }  `}
          >
            <div className="hidden lg:flex justify-center ">
              <img src={`/images/${imgLink}`} alt="" />
            </div>
            {content}
          </div>
        </div>
      </div>
    );
  };

  return direction === "left" ? renderLeftCard() : renderRightCard();
};

export default RoadMapCard;
