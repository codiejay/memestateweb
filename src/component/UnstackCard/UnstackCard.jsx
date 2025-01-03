import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UnstackCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: index * 100, // Initial offset for stacking effect
            scale: 1 - index * 0.1, // Smaller scale for stacked appearance
            // opacity: 0,
            zIndex: cardsRef.current.length - index, // Initial z-index
          },
          {
            y: 0, // Bring to default position
            scale: 1, // Reset scale
            opacity: 1, // Fade in
            zIndex: 100 - index, // Dynamically update z-index
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
              markers: true, // Set to true to debug
              onUpdate: (self) => {
                // Dynamically set zIndex based on scroll progress
                const progress = self.progress;
                cardsRef.current.forEach((card, i) => {
                  card.style.zIndex = Math.floor(
                    cardsRef.current.length -
                      Math.abs(i - progress * cardsRef.current.length)
                  );
                });
              },
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-gray-100">
      <div className="sticky top-40 mx-auto max-w-md h-80">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`absolute top-0 left-0 w-full h-full bg-white shadow-lg rounded-lg`}
            style={{
              backgroundColor: `hsl(${i * 50}, 70%, 80%)`,
              zIndex: 5 - i,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UnstackCards;
