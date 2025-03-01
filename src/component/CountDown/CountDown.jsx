import { useState, useEffect } from "react";

const CountDown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-05-10 19:15:00").getTime(); // Specific end date and time

    const startCountdown = () => {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(targetDate - currentTime, 0);

        setTimeRemaining(remainingTime);

        if (remainingTime === 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);

      return () => clearInterval(countdownInterval); // Cleanup on component unmount
    };

    startCountdown();
  }, []);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div
        className="countdown-display bg-[#393ebd] rounded-[33px] py-4 grid grid-cols-4 justify-center items-center lg:gap-6 lg:px-6 px-3 "
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <p
            className="lg:text-base text-xs  font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            days
          </p>
          <span className=" lg:text-[40px]  text-3xl font-normal text-black">
            {days.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            Hour
          </span>
          <span className=" lg:text-[40px]  text-3xl font-normal text-black">
            {hours.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs  font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            mins
          </span>
          <span className=" lg:text-[40px]  text-3xl font-normal text-black">
            {minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs  font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            secs
          </span>
          <span className=" lg:text-[40px]  text-3xl font-normal text-black">
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  };

  return <div>{formatTime(timeRemaining)}</div>;
};

export default CountDown;
