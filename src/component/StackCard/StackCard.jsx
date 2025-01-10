import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { contentList } from "../../utils";

const CardScrollEffect = () => {
  const cardsContainerRef = useRef(null);

  return (
    <div>
      <div className="cards" ref={cardsContainerRef}>
        {contentList.map((card, index) => (
          <Card
            key={index}
            card={card}
            index={index}
            totalCards={contentList.length}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ card, index, totalCards }) => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this to control when the animation triggers
  });

  // Calculate the scale and brightness dynamically
  const toScale = 1 - (totalCards - 1 - index) * 0.1;
  const scale = inView ? toScale : 1;

  return (
    <div
      className="card"
      data-index={index}
      ref={ref}
      style={{ paddingTop: `${20 + index * 20}px` }}
    >
      <div
        className="card__inner"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.3s, filter 0.3s",
        }}
      >
        <div className="bg-[#A3A5E1] h-[201px] overflow-hidden">
          <img
            src={card.image}
            alt="reward system"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="card__content h-full bg-[#FF0000] flex  flex-col items-center gap-3 py-1">
          {card.title}
          {card.text}
        </div>
      </div>
    </div>
  );
};

export default CardScrollEffect;
