import { useState, useEffect } from "react";

const CountDown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const calculateNextFriday = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
      const daysUntilFriday = (6 - dayOfWeek + 7) % 7 || 7; // Days until next Friday (handles today being Friday)

      // Calculate next Friday at 12:00 PM
      const nextFriday = new Date(now);
      nextFriday.setDate(now.getDate() + daysUntilFriday);
      nextFriday.setHours(12, 0, 0, 0); // Set time to 12:00 PM

      return nextFriday.getTime();
    };

    const startCountdown = () => {
      const eventTime = calculateNextFriday();

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = Math.max(eventTime - now, 0);

        setTimeRemaining(remainingTime);

        if (remainingTime === 0) {
          clearInterval(countdownInterval);
          alert("Countdown complete!");
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
        className="countdown-display bg-[#D10000] rounded-[33px] py-4 grid grid-cols-4 justify-center items-center gap-6 px-6 "
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <div className="relative flex flex-col  items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <p
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            days
          </p>
          <span className="lg:text-3xl text-lg font-normal text-black">
            {days.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            Hour
          </span>
          <span className="lg:text-3xl text-lg font-normal text-black">
            {hours.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            mins
          </span>
          <span className="lg:text-3xl text-lg font-normal text-black">
            {minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] ">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            secs
          </span>
          <span className="lg:text-3xl text-lg font-normal text-black">
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  };

  return <div>{formatTime(timeRemaining)}</div>;
};

export default CountDown;
