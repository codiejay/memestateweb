import { useDifferentPrize } from "../../context/WhyIsPriceDifferentContext";

const WhyIsPriceDifferent = () => {
  const { closeModal } = useDifferentPrize();
  return (
    <div
      className="fixed  w-screen z-[9999999] justify-center flex  lg:h-screen h-fit top-0 items-center max-w-[1600px] mx-auto"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      <div className="border-[12px] border-[#282B7F] lg:h-[647px] h-full max-w-[1102px] rounded-[32px] overflow-hidden w-full bg-white">
        <div className="w-full border-[10px] border-white h-full relative">
          <div className="absolute right-4 z-50">
            <button onClick={closeModal}>
              <img src="/images/closeblack.svg" alt="" className="h-14" />
            </button>
          </div>
          <div className="p-4">
            <h1 className="text-black text-5xl">
              Why is price on presale different?
            </h1>
            <div className="grid grid-cols-2 mt-10 gap-6">
              <div>
                <h2 className="text-3xl text-[#FF0000] font-normal">
                  Early Adopter Incentives
                </h2>
                <p className="text-2xl text-[#1F1F1F] font-poppins pt-6">
                  Investors in earlier stages enjoy a significant gains compared
                  to later stages or public listing. This rewards those who show
                  confidence in the project early on.
                </p>
              </div>
              <div>
                <h2 className="text-3xl text-[#FF0000] font-normal">
                  Sustainable Token Economics
                </h2>
                <p className="text-2xl text-[#1F1F1F] font-poppins pt-6">
                  The pricing model in stages ensures a healthy distribution of
                  tokens and generates funds to support development, marketing,
                  and liquidity.
                </p>
              </div>
              <div>
                <h2 className="text-3xl text-[#FF0000] font-normal">
                  Risk-Reward Balance
                </h2>
                <p className="text-2xl text-[#1F1F1F] font-poppins pt-6">
                  We realize that early investors take on more risk as the
                  project is in its infancy. To balance this, they receive
                  tokens at a lower price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyIsPriceDifferent;
