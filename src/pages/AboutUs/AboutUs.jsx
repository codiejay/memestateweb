import { useRef, useState } from "react";
import AboutUsModal from "../../component/AboutUsModal/AboutUsModal";
import { useAboutUs } from "../../context/AboutUsContext";

const AboutUs = () => {
  const container = useRef(null);
  const { openModal, isOpen } = useAboutUs();
  const [aboutUs, setAboutUs] = useState({
    name: "",
    content: "",
    img: "",
    title: "",
    borderColor: "",
  });

  const teamMembers = [
    {
      name: "Erik Mayer",
      title: "CEO",
      image: "/images/Erikmayer.png",
      borderColor: "#DD7627",
      content:
        "Erik is drawing from his experience founding and raising $32ml for one of the first and biggest Axie play-to-earn guilds UniX Gaming. He now assorted a trusted team that can bring forth his vision of a sustainable, fun, and profitable p2e ecosystem.",
    },
    {
      name: "Kyle Francis",
      title: "Marketing Strategist",
      image: "/images/kylefrancis.png",
      borderColor: "#17B50F",
      content:
        "Kyle Francis brings a proven track record of strategic content marketing. As the mastermind behind massive social media growth campaigns, he's driven over 500M views for industry leaders like Tai Lopez, Jim Kwik, and Andrew Tate. Kyle's unique blend of content experience and strategic marketing positions him perfectly to drive Memestate's growth and community engagement.",
    },
    {
      name: "Yu-kai Chou",
      title: "Lead Game Designer",
      image: "/images/yu-kai-chou.png",
      borderColor: "#292B83",
      content:
        "Yu-kai Chou is an Author and International Keynote Speaker on Gamification and Behavioral Design working closely with organizations like Harvard, Stanford, Tesla, Google, IDEO LEGO, BCG. His Octalysis Framework will create an engaging and addictive mobile game experience. He’ll work closely with our development team to ensure that the game incorporates the most effective gamification techniques to drive user engagement, retention, and loyalty.",
    },
    {
      name: "Francesco Ferrazzino",
      title: "Lead Game Developer",
      image: "/images/francesco.png",
      borderColor: "#FF0000",
      content:
        "Francesco Ferrazzino, our Game Producer, is a world-renowned mobile game producer and the creator of Father.IO - the first Real Life First Person Shooter for mobile with 10m downloads - and World League Live!, a web3 game fan engagement platform in soft launch with over 600k+ downloads. Francesco's main expertise is producing, developing, and launching engaging and successful mobile games. In his spare time, he advises other startups as a Techstars Mentor in Torino.",
    },
  ];

  const handleOpenModal = (member) => {
    openModal();
    setAboutUs({
      name: member.name,
      img: member.image,
      title: member.title,
      content: member.content,
      borderColor: member.borderColor,
    });
  };
  return (
    <div ref={container}>
      <section className="h-full  lg:pt-[30vh] "></section>
      <section
        className="bg-[#4F7298] lg:px-16 px-8 py-16 relative   pt-48 page"
        style={{ borderTop: "9px solid black" }}
      >
        <div className="flex items-center flex-col  justify-center">
          <div className="lg:-mt-64  mt-2">
            <img src="/images/HANGINGOURTEAM.png" alt="hanging" />
          </div>
          <div className="   grid lg:grid-cols-2  md:grid-cols-2  sm:grid-cols-2  justify-center gap-9 mt-12  ">
            {teamMembers.map((member, index) => (
              <div className="relative" key={index}>
                <div
                  className="border-[9px] rounded-lg shadow-black-custom md:h-[328px] h-full overflow-y-hidden"
                  style={{ borderColor: member.borderColor }}
                >
                  <div className="grid md:grid-cols-5 grid-cols-1 h-full">
                    <div className="md:col-span-2 col-span-1">
                      <img
                        src={member.image}
                        alt={member.name.toLowerCase().replace(" ", "-")}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 col-span-1 bg-[#d5d5d5] flex flex-col justify-center px-8 lg:gap-4 gap-2">
                      <h1 className="lg:text-[40px] text-3xl text-[#010101]">
                        {member.name}
                      </h1>
                      <p className="text-2xl text-[#010101] font-poppins font-semibold">
                        {member.title}
                      </p>
                      <button
                        className="text-2xl text-[#010101] font-normal p-[unset] text-left underline"
                        onClick={() => handleOpenModal(member)}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="lg:px-16 px-8 py-8 w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1  items-start w-full gap-8 justify-between pt-16">
          <div className="flex flex-col items-center gap-6 bg-[#A2A4DF] border-[6px] border-[#000000] rounded-[32px] lg:px-10 px-2 py-6">
            <div className="h-[244px]">
              <img src="/images/wheel.png" alt="wheel" />
            </div>
            <div>
              <h2 className="lg:text-[54px]  text-2xl font-normal text-black text-center mb-10">
                Our Mission
              </h2>
              <p className="text-center font-medium lg:text-[24px] text-base text-black font-poppins  leading-[38px]  tracking-[-2.2%]    ">
                To create a gaming ecosystem that blends engaging gameplay with
                sustainable financial rewards, empowering players to earn real
                value for their time while fostering a vibrant blockchain
                community driven by innovation, fun, and fairness.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 bg-[#FF0000] border-[6px] border-[#000000] rounded-[32px] lg:px-10 px-2 py-6 h-full">
            <div className="h-[244px] mb-2">
              <img src="/images/astronut.png" alt="wheel" />
            </div>
            <div>
              <h2 className="lg:text-[54px]  text-2xl font-normal text-white text-center mb-10">
                Our Vision
              </h2>
              <p className="text-center font-medium lg:text-[24px] text-base text-white font-poppins  leading-[38px]  tracking-[-2.2%]    ">
                To set the standard for the future of blockchain gaming by
                delivering a seamless fusion of fun, strategy, and financial
                opportunity that engages players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-ful lg:px-16 px-8 py-16 w-full  hidden">
        <div className="flex justify-center flex-col items-center gap-8 bg-white rounded-[22px] border-[6px] border-[#000000]  px-10 py-8 ">
          <h2 className="text-[46px] font-normal text-[#010101] ">
            Who we are
          </h2>
          <div>
            <p className="text-center font-normal text-3xl text-[#010101]   -tracking-[2.2%] my-4 leading-[48px] font-poppins">
              Welcome to Memestate, where gaming meets innovation, fun meets
              strategy, and players meet real-world rewards. Inspired by the
              classic Monopoly, Memestate is a next-generation play-to-earn
              (P2E) blockchain-based game that transforms the world of gaming.
            </p>
            <p className="text-center font-normal text-3xl text-[#010101]   -tracking-[2.2%] my-4  leading-[48px] font-poppins">
              At Memestate, we believe in the combination of high-quality
              gameplay with financial rewards. Here, we’ve designed a dynamic
              and fast-paced gaming experience that not only entertains but also
              rewards players for their time and skills.{" "}
            </p>
            <p className="text-center font-normal text-3xl text-[#010101]   -tracking-[2.2%] my-4  leading-[48px] font-poppins">
              {" "}
              Whether you’re climbing leaderboards, unlocking characters, or
              diving into competitive modes, every move in Memestate holds the
              potential for real-world impact.
            </p>
          </div>
        </div>
      </section>
      {isOpen && (
        <AboutUsModal
          alt={aboutUs.name}
          img={aboutUs.img}
          name={aboutUs.name}
          title={aboutUs.title}
          content={aboutUs.content}
          borderColor={aboutUs.borderColor}
        />
      )}

      <section className=" lg:px-16 px-8 py-16 relative h-[90vh]   page hidden">
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
          <p className="text-center font-normal text-4xl text-white  -tracking-[2.2%] lg:max-w-[848px] mt-10 mb-4">
            We’re not just building a game—we’re building a community. Memestate
            is for core gamers, strategists, and dreamers who believe in the
            power of play.
          </p>
          <p className="text-center font-normal text-4xl text-white  -tracking-[2.2%] lg:max-w-[848px] my-4">
            Ready to hop in? Dive into Memestate today and experience a game
            where your time, skills, and strategies are of real value!
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
