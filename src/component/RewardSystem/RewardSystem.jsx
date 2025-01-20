import { useEffect, useRef, useState } from "react";
import { contentList, useWindowSize } from "../../utils";
import ButtonWithSound from "../Button/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const RewardSystem = () => {
  const { width } = useWindowSize();
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const boxes = gsap.utils.toArray(".stack-box");
  //   console.log(boxes);

  //   // Set up GSAP timeline with ScrollTrigger
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: `${window.innerHeight * boxes.length} top`,
  //       scrub: true,
  //       pin: true,
  //       markers: false,
  //     },
  //   });

  //   tl.from(boxes, {
  //     scale: 0,
  //     // opacity: 0,
  //     stagger: 1,
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const boxes = gsap.utils.toArray(".stack-box");

      if (!boxes.length) return;

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `${window.innerHeight * boxes.length} top`,
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.from(boxes, { y: 50, stagger: 0.3 });
      boxes.forEach((box, index) => {
        tl.to(
          box,
          {
            zIndex: boxes.length - index, // Ensure higher cards appear on top
            // opacity: 1,
            y: 0,
            duration: 0.5,
          },
          index * 0.3 // Staggered effect
        );
      });
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return (
    <div className="h-full">
      <div
        id="box-container"
        className="flex justify-center h-screen"
        ref={containerRef}
      >
        <div className="flex justify-center flex-col mt-8 max-w-[1200px] w-full  relative h-full">
          {contentList.map((item, index) => {
            const zIndex = 50 - index; // Higher index -> higher z-index
            const topPosition = index * 20; // Adjust as needed
            const leftPosition = index * 20; // Adjust as needed

            return (
              <div
                key={index}
                className="absolute w-full  stack-box"
                style={{
                  top: `${topPosition}px`,
                  zIndex: zIndex,
                  left: `${leftPosition}px`,
                }}
              >
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 relative justify-center w-full">
                  {/* Left Section */}
                  <div className="z-40">
                    <div className="masked-div-1 relative lg:w-[924px] w-full">
                      <div className="px-10 pt-4 pb-6">
                        {item.title}
                        {item.text}
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
                  <div className="-ml-40 z-30 mt-6 relative lg:block">
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
      </div>
    </div>
  );
};
export default RewardSystem;
