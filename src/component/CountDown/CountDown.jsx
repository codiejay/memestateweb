import { useState, useEffect } from "react";

const CountDown = () => {
  const [eventDate, setEventDate] = useState("01/11/2025");

  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    if (eventDate) {
      setEventDate("01/11/2025");
      localStorage.setItem("eventDate", eventDate);

      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        const remainingTime = Math.max(eventTime - currentTime, 0);

        setTimeRemaining(remainingTime);

        if (remainingTime === 0) {
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [eventDate]);

  //   const formatDate = (date) => {
  //     const options = { month: "long", day: "numeric", year: "numeric" };
  //     return new Date(date).toLocaleDateString("en-US", options);
  //   };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display bg-[#D10000] rounded-[33px]   grid grid-cols-4 justify-center items-center  gap-6 px-10 py-3 ">
        <div className="relative flex flex-col items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF]">
          <span className="lg:text-2xl text-lg font-normal uppercase text-#2C2F8B] -mb-3">
            days
          </span>
          <span className="text-[58px] font-normal text-black ">
            {days.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF]">
          <span className="lg:text-2xl text-lg font-normal uppercase text-#2C2F8B] -mb-3">
            Hour
          </span>
          <span className="text-[58px] font-normal text-black ">
            {hours.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF]">
          <span className="lg:text-2xl text-lg font-normal uppercase text-#2C2F8B] -mb-3">
            mins
          </span>
          <span className="text-[58px] font-normal text-black ">
            {minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF]">
          <span className="lg:text-2xl text-lg font-normal uppercase text-#2C2F8B] -mb-3">
            secs
          </span>
          <span className="text-[58px] font-normal text-black ">
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div>{formatTime(timeRemaining)}</div>
    </div>
  );
};

export default CountDown;
