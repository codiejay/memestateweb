// import { useState } from "react";
// import { contentList, useWindowSize } from "../../utils";
// import ButtonWithSound from "../Button/Button";

// const RewardSystem = () => {
//   const { width } = useWindowSize();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(null);
//   const [clickedPrevious, setClickedPrevious] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const handleNext = () => {
//     const audio = new Audio("/audio/button.mp3");
//     audio.play();
//     setDirection("next");
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Loop back to 0
//     // Trigger the animation
//     setClicked(true);
//     setTimeout(() => setClicked(false), 200); // Reset animation after 200ms
//   };

//   const handlePrevious = () => {
//     const audio = new Audio("/audio/button.mp3");
//     audio.play();
//     setDirection("prev");
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + items.length) % items.length // Loop back to last item
//     );
//     // Trigger the animation
//     setClickedPrevious(true);
//     setTimeout(() => setClickedPrevious(false), 200); // Reset animation after 200ms
//   };
//   return (
//     <div className="h-full">
//       <div className=" flex  justify-center  items-center gap-10">
//         <button
//           onClick={handlePrevious}
//           className={`  text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
//             clickedPrevious ? "scale-95" : ""
//           }`}
//           style={{ boxShadow: "8px 8px 0px 0px #000000" }}
//         >
//           <img src="/images/carouselButton.png" alt="" />
//         </button>
//         <button
//           onClick={handleNext}
//           className={`  text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black  rounded-full w-[58px] h-[58px]  flex justify-center items-center transition-all transform ${
//             clicked ? "scale-95" : ""
//           }`}
//           style={{ boxShadow: "8px 8px 0px 0px #000000" }}
//         >
//           <img src="/images/carouselButton2.png" alt="" />
//         </button>
//       </div>
//       {width <= 988 ? (
//         <div className="my-6 flex flex-col gap-14 items-center justify-center stack">
//           {contentList.map((item, index) => {
//             return (
//               <div
//                 className="h-[788px] w-full shadow-black-custom relative "
//                 key={index}
//               >
//                 <div className="bg-[#A3A5E1] h-[381px] overflow-hidden">
//                   <img src={item.image} alt="" />
//                 </div>
//                 <div className="h-[403px] bg-[#FF0000] flex  flex-col items-center gap-3 py-1">
//                   {item.title}

//                   {item.text}

//                   <ButtonWithSound
//                     label={"Learn more"}
//                     type={"beta"}
//                     soundPath={"/audio/button.mp3"}
//                     className={"bg-[#2C2F8C]  hidden"}
//                   />
//                 </div>
//                 <div className="flex justify-between absolute top-[43%] w-full">
//                   <div className=" ">
//                     <img src="/images/KNOTm.png" alt="" />
//                   </div>
//                   <div className="">
//                     <img src="/images/KNOTm1.png" alt="" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="flex justify-center h-screen">
//           <div className="flex justify-center flex-col mt-8 max-w-[1200px] w-full  relative h-full">
//             {contentList.map((item, index) => {
//               const zIndex = 50 - index; // Higher index -> higher z-index
//               const topPosition = index * 20; // Adjust as needed
//               const leftPosition = index * 20; // Adjust as needed

//               return (
//                 <div
//                   key={index}
//                   className="absolute w-full"
//                   style={{
//                     top: `${topPosition}px`,
//                     zIndex: zIndex,
//                     left: `${leftPosition}px`,
//                   }}
//                 >
//                   <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 relative justify-center w-full">
//                     {/* Left Section */}
//                     <div className="z-40">
//                       <div className="masked-div-1 relative lg:w-[924px] w-full">
//                         <div className="px-10 pt-4 pb-6">
//                           <h3>{item.title}</h3>
//                           <p>{item.text}</p>
//                           <ButtonWithSound
//                             label="Learn more"
//                             type="beta"
//                             soundPath="/audio/button.mp3"
//                             className="bg-[#2C2F8C] hidden"
//                           />
//                         </div>
//                         {/* Decorative Images */}
//                         <div className="absolute right-[1%] top-8 lg:block hidden">
//                           <img src="/images/KNOT.png" alt="Knot decoration" />
//                         </div>
//                         <div className="absolute right-[22%] bottom-10 lg:block hidden">
//                           <img src="/images/KNOT.png" alt="Knot decoration" />
//                         </div>
//                       </div>
//                     </div>
//                     {/* Right Section */}
//                     <div className="-ml-40 z-30 mt-6 relative lg:block">
//                       <div className="masked-div-2">
//                         <div className="py-4 flex justify-end items-center">
//                           <div className="w-[400px] mt-6">
//                             <img src={item.image} alt={item.title} />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RewardSystem;
import { useState } from "react";
import { contentList, useWindowSize } from "../../utils";
import ButtonWithSound from "../Button/Button";

const RewardSystem = () => {
  const { width } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedPrevious, setClickedPrevious] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleNext = () => {
    const audio = new Audio("/audio/button.mp3");
    audio.play();

    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length); // Loop back to 0
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset animation after 200ms
  };

  const handlePrevious = () => {
    const audio = new Audio("/audio/button.mp3");
    audio.play();

    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contentList.length) % contentList.length // Loop back to last item
    );
    setClickedPrevious(true);
    setTimeout(() => setClickedPrevious(false), 200); // Reset animation after 200ms
  };

  return (
    <div className="h-full relative">
      {width <= 1020 ? (
        <div className="my-6 flex flex-col gap-14 items-center justify-center stack">
          {contentList.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                className={`h-[788px] w-full shadow-black-custom relative transition-all transform ${
                  isActive ? "scale-95 translate-y-[-10px]" : ""
                }`}
                key={index}
                style={{
                  zIndex: isActive ? 100 : 50 - index, // Ensure the active card is on top
                }}
              >
                <div className="bg-[#A3A5E1] h-[381px] overflow-hidden">
                  <img src={item.image} alt="" />
                </div>
                <div className="h-[403px] bg-[#FF0000] flex flex-col items-center gap-3 py-1">
                  {item.title}
                  {item.text}
                  <ButtonWithSound
                    label={"Learn more"}
                    type={"beta"}
                    soundPath={"/audio/button.mp3"}
                    className={"bg-[#2C2F8C] hidden"}
                  />
                </div>
                <div className="flex justify-between absolute top-[43%] w-full">
                  <div>
                    <img src="/images/KNOTm.png" alt="" />
                  </div>
                  <div>
                    <img src="/images/KNOTm1.png" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className={`${width <= 1434 ? "hidden" : "block"}`}>
            <button
              onClick={handleNext}
              className={`text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black rounded-full w-[58px] h-[58px]  absolute  right-10 bottom-1/2 flex justify-center items-center transition-all transform ${
                clicked ? "scale-95" : ""
              }`}
              style={{ boxShadow: "8px 8px 0px 0px #000000" }}
            >
              <img src="/images/carouselButton2.png" alt="" />
            </button>
            <button
              onClick={handlePrevious}
              className={`text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black rounded-full w-[58px] h-[58px]  absolute left-10 bottom-1/2  flex justify-center items-center transition-all transform ${
                clickedPrevious ? "scale-95" : ""
              }`}
              style={{ boxShadow: "8px 8px 0px 0px #000000" }}
            >
              <img src="/images/carouselButton.png" alt="" />
            </button>
          </div>
          <div className="flex justify-center h-[80vh] flex-col items-center gap-8">
            <div className="flex justify-center flex-col mt-8 max-w-[1200px] w-full relative h-full xl:mr-16 lg:mr-0">
              {contentList.map((item, index) => {
                const isActive = index === currentIndex;
                const zIndex = isActive ? 100 : 50 - index; // Set active card z-index to 100
                const topPosition = isActive ? 0 : index * 20; // Set top of active card to 0
                const leftPosition = isActive ? 0 : index * 20; // Set left of active card to 0

                return (
                  <div
                    key={index}
                    className={`absolute w-full transition-all transform mx-1     `}
                    style={{
                      top: `${topPosition}px`,
                      left: `${leftPosition}px`,
                      zIndex: zIndex,
                      transition: "all 0.s ease", // Smooth transition for all properties
                    }}
                  >
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 relative justify-center w-full">
                      {/* Left Section */}
                      <div className="z-40">
                        <div className="masked-div-1 relative lg:w-[924px] w-full">
                          <div className="px-10 pt-4 pb-6">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
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
                      <div
                        className={`  ${
                          width >= 1280 ? "-ml-40" : "-ml-480"
                        } z-30 mt-6 relative lg:block`}
                      >
                        <div className="masked-div-2">
                          <div className="py-4 flex justify-end items-center">
                            <div className="w-[400px] mt-6">
                              <img src={item.image} alt={item.title} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={` mt-16 ${width <= 1434 ? "flex gap-8 " : "hidden"}`}
            >
              <button
                onClick={handlePrevious}
                className={`text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black rounded-full w-[58px] h-[58px]   flex justify-center items-center transition-all transform ${
                  clickedPrevious ? "scale-95" : ""
                }`}
                style={{ boxShadow: "8px 8px 0px 0px #000000" }}
              >
                <img src="/images/carouselButton.png" alt="" />
              </button>
              <button
                onClick={handleNext}
                className={`text-2xl font-normal text-white capitalize bg-[#FF0000] border-[3px] border-black rounded-full w-[58px] h-[58px]   flex justify-center items-center transition-all transform ${
                  clicked ? "scale-95" : ""
                }`}
                style={{ boxShadow: "8px 8px 0px 0px #000000" }}
              >
                <img src="/images/carouselButton2.png" alt="" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RewardSystem;
