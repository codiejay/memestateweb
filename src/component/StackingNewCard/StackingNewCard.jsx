import ButtonWithSound from "../Button/Button";

const StackingNewCard = ({ title, description, src, link, color, number }) => {
  return (
    <div className={`h-[80vh] flex items-center justify-center sticky top-9 `}>
      <div
        className="max-w-[1300px]  flex items-center justify-center "
        style={{ marginTop: -12 * number, marginLeft: 30 * number }}
      >
        {/* {title} */}
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 relative justify-center w-full">
          {/* Left Section */}
          <div className="z-40">
            <div className="masked-div-1 relative lg:w-[924px] w-full">
              <div className="px-10 pt-4 pb-6">
                <h2 className="lg:text-[48px] text-3xl font-normal text-white lg:leading-[4rem] lg:my-3 lg:  lg:text-left text-center">
                  {title}
                </h2>
                <p className="max-w-2xl font-poppins my-5  lg:text-[1.1rem] text-[14px] lg:text-left text-center">
                  {description}
                </p>
                <ButtonWithSound
                  label="Learn more"
                  type="beta"
                  soundPath="/audio/button.mp3"
                  className="bg-[#2C2F8C] hidden"
                />
              </div>
              {/* Decorative Images */}
              <div className="absolute right-[1%] top-8 lg:block hidden">
                <img src="/images/KNOT.png" alt="Knot decoration" />
              </div>
              <div className="absolute right-[22%] bottom-10 lg:block hidden">
                <img src="/images/KNOT.png" alt="Knot decoration" />
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="-ml-40 z-30 mt-6 relative lg:block masked-div-2-container">
            <div className="masked-div-2">
              <div className="py-4 flex justify-end items-center">
                <div className="w-[400px] mt-6">
                  <img src={src} alt={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingNewCard;
