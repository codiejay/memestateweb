import { useState } from "react";

const ButtonWithSound = ({ label, soundPath, type, className, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // Play the provided click sound
    const audio = new Audio(soundPath);
    audio.play();
    onClick();

    // Trigger the animation
    setClicked(true);
    setTimeout(() => setClicked(false), 200); // Reset animation after 200ms
  };

  // Button styles based on the type
  const getButtonStyles = (type) => {
    if (type === "alpha") {
      return "text-xl font-normal text-white capitalize bg-transparent border-[2px] border-white py-3 px-8 rounded-[79px] tracking-wide";
    } else if (type === "beta") {
      return "text-2xl font-normal text-white capitalize  border-[3px] border-black py-3 px-8 rounded-[79px] tracking-wide";
    }
    return ""; // default styles (if any)
  };

  return (
    <button
      onClick={handleClick}
      className={`${getButtonStyles(type)} transition-all transform ${
        clicked ? "scale-95" : ""
      } ${className}`}
      style={{ boxShadow: type === "beta" ? "8px 8px 0px 0px #000000" : "" }}
    >
      {label}
    </button>
  );
};

export default ButtonWithSound;
