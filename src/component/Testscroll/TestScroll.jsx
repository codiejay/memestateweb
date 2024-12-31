import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const OverlappingCards = () => {
  useEffect(() => {
    // Create a timeline for the animation
    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1,
      },
    });

    // Define animation sequence for card1
    timeln.addLabel("card1");
    timeln.to(".card-1", {
      xPercent: 0,
      opacity: 1,
    });

    // Animation for card2
    timeln.from(".card-2", {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel("card2");

    timeln.to(
      ".card-1",
      {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5,
      },
      "-=0.3"
    ); // This starts 0.3 seconds before card 2 finishes

    timeln.to(".card-2", {
      xPercent: 0,
      opacity: 1,
    });

    timeln.from(".card-3", {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel("card3");

    timeln.to(
      ".card-2",
      {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6,
      },
      "-=0.3"
    );

    timeln.to(".card-3", {
      xPercent: 0,
      opacity: 1,
    });

    timeln.to(".card-3", {}); // Empty action to conclude the timeline
  }, []);

  return (
    <div className="cards relative overflow-hidden h-screen">
      <div className="card card-1 absolute transform translate-x-0 opacity-0 bg-green-500 text-white flex justify-center items-center rounded-lg w-48 h-72">
        Card 1
      </div>
      <div className="card card-2 absolute transform translate-x-24 opacity-0 bg-blue-500 text-white flex justify-center items-center rounded-lg w-48 h-72">
        Card 2
      </div>
      <div className="card card-3 absolute transform translate-x-24 opacity-0 bg-red-500 text-white flex justify-center items-center rounded-lg w-48 h-72">
        Card 3
      </div>
    </div>
  );
};

export default OverlappingCards;
