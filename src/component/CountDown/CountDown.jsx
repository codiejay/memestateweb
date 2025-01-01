// import { useState, useEffect } from "react";

// const CountDown = () => {
//   const [eventDate, setEventDate] = useState("01/12/2025");

//   const [timeRemaining, setTimeRemaining] = useState(0);

//   useEffect(() => {
//     if (eventDate) {
//       setEventDate("01/12/2025");
//       localStorage.setItem("eventDate", eventDate);

//       const countdownInterval = setInterval(() => {
//         const currentTime = new Date().getTime();
//         const eventTime = new Date(eventDate).getTime();
//         const remainingTime = Math.max(eventTime - currentTime, 0);

//         setTimeRemaining(remainingTime);

//         if (remainingTime === 0) {
//           clearInterval(countdownInterval);
//           alert("Countdown complete!");
//         }
//       }, 1000);

//       return () => clearInterval(countdownInterval);
//     }
//   }, [eventDate]);

//   //   const formatDate = (date) => {
//   //     const options = { month: "long", day: "numeric", year: "numeric" };
//   //     return new Date(date).toLocaleDateString("en-US", options);
//   //   };

//   const formatTime = (time) => {
//     const seconds = Math.floor((time / 1000) % 60);
//     const minutes = Math.floor((time / (1000 * 60)) % 60);
//     const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));

//     return (
//       <>
//         <div
//           className="countdown-display bg-[#D10000] rounded-[33px] h-[118px]   grid grid-cols-4 justify-center items-center  gap-6 px-10 py-3 "
//           style={{
//             boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
//           }}
//         >
//           <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
//             <p
//               className="lg:text-base text-xs lg:block hidden  font-normal uppercase  "
//               style={{
//                 color: "#2C2F8B",
//               }}
//             >
//               days
//             </p>
//             <span className="lg:text-[58px] text-3xl font-normal text-black    ">
//               {days.toString().padStart(2, "0")}
//             </span>
//           </div>
//           <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
//             <span
//               className="lg:text-base text-xs  lg:block hidden   font-normal uppercase  "
//               style={{
//                 color: "#2C2F8B",
//               }}
//             >
//               Hour
//             </span>
//             <span className="lg:text-[58px] text-3xl font-normal text-black ">
//               {hours.toString().padStart(2, "0")}
//             </span>
//           </div>
//           <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
//             <span
//               className="lg:text-base text-xs lg:block hidden   font-normal uppercase  "
//               style={{
//                 color: "#2C2F8B",
//               }}
//             >
//               mins
//             </span>
//             <span className="lg:text-[58px] text-3xl font-normal text-black ">
//               {minutes.toString().padStart(2, "0")}
//             </span>
//           </div>
//           <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
//             <span
//               className="lg:text-base text-xs lg:block hidden   font-normal uppercase  "
//               style={{
//                 color: "#2C2F8B",
//               }}
//             >
//               secs
//             </span>
//             <span className="lg:text-[58px] text-3xl font-normal text-black ">
//               {seconds.toString().padStart(2, "0")}
//             </span>
//           </div>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className="">
//       <div>{formatTime(timeRemaining)}</div>
//     </div>
//   );
// };

// export default CountDown;
import { useState, useEffect } from "react";

const CountDown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const startCountdown = () => {
      const now = new Date();
      // Adding 10 days, 7 hours, 4 minutes, and 30 seconds
      const futureTime = new Date(
        now.getTime() +
          10 * 24 * 60 * 60 * 1000 + // 10 days
          7 * 60 * 60 * 1000 + // 7 hours
          4 * 60 * 1000 + // 4 minutes
          30 * 1000 // 30 seconds
      );
      const eventTime = futureTime.getTime();

      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const remainingTime = Math.max(eventTime - currentTime, 0);

        setTimeRemaining(remainingTime);

        if (remainingTime === 0) {
          clearInterval(countdownInterval);
          alert("Countdown complete!");
        }
      }, 1000);

      return () => clearInterval(countdownInterval);
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
        className="countdown-display bg-[#D10000] rounded-[33px] h-[118px] grid grid-cols-4 justify-center items-center gap-6 px-10 py-3"
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
          <p
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            days
          </p>
          <span className="lg:text-[58px] text-3xl font-normal text-black">
            {days.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            Hour
          </span>
          <span className="lg:text-[58px] text-3xl font-normal text-black">
            {hours.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            mins
          </span>
          <span className="lg:text-[58px] text-3xl font-normal text-black">
            {minutes.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="relative flex flex-col gap-1 items-center justify-center border-[4px] border-black px-3 shadow-inset-custom bg-[#BFBFBF] h-[84px]">
          <span
            className="lg:text-base text-xs lg:block hidden font-normal uppercase"
            style={{ color: "#2C2F8B" }}
          >
            secs
          </span>
          <span className="lg:text-[58px] text-3xl font-normal text-black">
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  };

  return <div>{formatTime(timeRemaining)}</div>;
};

export default CountDown;
