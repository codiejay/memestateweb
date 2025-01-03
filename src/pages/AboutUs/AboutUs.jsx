import { useRef } from "react";

const AboutUs = () => {
  const container = useRef(null);

  return (
    <div ref={container}>
      <section className="h-ful lg:px-16 px-8 py-16 w-full lg:pt-[30vh] pt-48">
        <div className="flex justify-center flex-col items-center gap-8 ">
          <h2 className="text-[36px] font-normal text-white ">Who we are</h2>
          <div className="lg:max-w-[848px]">
            <p className="text-center font-normal text-2xl text-white   -tracking-[2.2%] my-8">
              Welcome to Memestate, where gaming meets innovation, fun meets
              strategy, and players meet real-world rewards. Inspired by the
              classic Monopoly, Memestate is a next-generation play-to-earn
              (P2E) blockchain-based game that transforms the world of gaming.
            </p>
            <p className="text-center font-normal text-2xl text-white   -tracking-[2.2%] my-8">
              At Memestate, we believe in the combination of high-quality
              gameplay with financial rewards. Here, we’ve designed a dynamic
              and fast-paced gaming experience that not only entertains but also
              rewards players for their time and skills.{" "}
            </p>
            <p className="text-center font-normal text-2xl text-white   -tracking-[2.2%] my-8">
              {" "}
              Whether you’re climbing leaderboards, unlocking characters, or
              diving into competitive modes, every move in Memestate holds the
              potential for real-world impact.
            </p>
          </div>
        </div>
      </section>
      <section className="lg:h-screen lg:px-16 px-8 pt- w-full">
        <div className="flex  lg:flex-row flex-col justify-center items-center w-full gap-8">
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/images/wheel.png" alt="wheel" />
            </div>
            <div>
              <h2 className="text-3xl font-normal text-white text-center mb-5">
                Our Mission
              </h2>
              <p className="text-center font-normal text-xl text-white  -tracking-[2.2%] lg:max-w-[490px]">
                To create a gaming ecosystem that blends engaging gameplay with
                sustainable financial rewards, empowering players to earn real
                value for their time while fostering a vibrant blockchain
                community driven by innovation, fun, and fairness.
              </p>
            </div>
          </div>
          <div className=" hidden lg:block h-[382px] w-[3px] bg-[#67BEFF]"></div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <img src="/images/astronut2.png" alt="astronut" />
            </div>
            <div>
              <h2 className="text-3xl font-normal text-white text-center mb-5">
                Our Vision
              </h2>
              <p className="text-center font-normal text-xl text-white  -tracking-[2.2%] lg:max-w-[490px]">
                To set the standard for the future of blockchain gaming by
                delivering a seamless fusion of fun, strategy, and financial
                opportunity that engages players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#4F7298] lg:px-16 px-8 py-16 relative lg:h-screen  h-full  page"
        style={{ borderTop: "9px solid black" }}
      >
        <div className="flex items-center flex-col  justify-center">
          <div className="lg:-mt-48  mt-2">
            <img src="/images/HANGINGOURTEAM.png" alt="hanging" />
          </div>
          <div className=" lg:flex  grid md:grid-cols-2  grid-cols-1 justify-center gap-28 mt-12  ">
            <div className="lg:w-[328px] relative">
              <div className="border-[9px] border-[#DD7627] rounded-lg shadow-black-custom h-[328px]">
                <img src="/images/Erikmayer.png" alt="erikmayer" />
              </div>
              <p className="text-3xl font-normal -tracking-[2.2%] mt-4 mb-2 text-center ">
                Erik mayer
              </p>
              <p className="text-xl font-normal my-2 text-center">ceo</p>
            </div>
            <div className="lg:w-[328px] relative">
              <div className="border-[9px] border-[#292B83] rounded-lg shadow-black-custom h-[328px]">
                <img src="/images/yu-kai-chou.png" alt="yu-kai-chou" />
              </div>
              <p className="text-3xl font-normal -tracking-[2.2%] mt-4 mb-2 text-center ">
                Yu-kai Chou
              </p>
              <p className="text-xl font-normal my-2 text-center">
                Lead game designer
              </p>
            </div>{" "}
            <div className="lg:w-[328px] relative">
              <div className="border-[9px] border-[#FF0000] rounded-lg shadow-black-custom h-[328px]">
                <img src="/images/francesco.png" alt="francesco" />
              </div>
              <p className="text-3xl font-normal -tracking-[2.2%] mt-4 mb-2 text-center ">
                Francesco Ferrazzino
              </p>
              <p className="text-xl font-normal my-2 text-center">
                Lead Game Developer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:px-16 px-8 py-16 relative h-[60vh]   page">
        <div className=" flex-col mb-4   items-center  justify-center flex  pt-14">
          <h1 className="text-white font-normal capitalize mb-2 text-[64px]">
            Join the
          </h1>
          <div>
            <img
              src="/images/memestate.png"
              alt=""
              className="lg:h-20  h-16 object-contain"
            />
          </div>
          <h1 className="text-white font-normal capitalize mt-1  text-[64px]">
            Movement
          </h1>
          <p className="text-center font-normal text-xl text-white  -tracking-[2.2%] lg:max-w-[848px] mt-10 mb-4">
            We’re not just building a game—we’re building a community. Memestate
            is for core gamers, strategists, and dreamers who believe in the
            power of play.
          </p>
          <p className="text-center font-normal text-xl text-white  -tracking-[2.2%] lg:max-w-[848px] my-4">
            Ready to hop in? Dive into Memestate today and experience a game
            where your time, skills, and strategies are of real value!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
