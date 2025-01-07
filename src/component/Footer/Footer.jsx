import { socialFooterIcon } from "../../utils";
import { links } from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="h-full bg-[#27297A]  ">
      <div className="bg-[url('/images/footer.png')] bg-no-repeat w-full bg-cover h-full flex justify-center items-center pt-20 footer overflow-hidden flex-col bg-[#27297A]">
        <Link to={"/"} className="mt-[16rem]">
          <img src="/images/memeanddice.png" alt="" />
        </Link>
        <nav>
          <ul
            className={`flex flex-col md:flex-row md:justify-center my-3 gap-6 md:gap-12  md:flex`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className="text-xl md:text-2xl font-normal text-white"
              >
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-shadow-custom text-4xl"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                ) : link.path.includes("#") ? (
                  <HashLink
                    to={link.path}
                    smooth
                    className="text-white text-shadow-custom text-4xl"
                    aria-label={link.name}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    to={link.path}
                    className="text-white text-shadow-custom text-4xl"
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4 justify-center my-3">
          {socialFooterIcon.map((icon, index) => (
            <a href={icon.link} key={index}>
              <img src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
        <div className="flex justify-center my-8 flex-col items-center">
          <div className=" border-y-2 border-white flex justify-center py-6 lg:max-w-[1270px]">
            <p className="lg:text-[25px] text-lg  text-white font-medium leading-[37.5px] font-poppins text-center lg:px-0 px-4">
              Join us in reshaping the future of crypto and play-to-earn gaming.
              Roll the dice, conquer the board and become the Ultimate
              Memestate Champion.
            </p>
          </div>

          <p className="lg:text-[17px] text-lg font-normal text-center font-poppins lg:max-w-[1191px] my-8 lg:px-0 px-4">
            Disclaimer: We are not responsible fo r any losses or harms
            sustained by you due to vulnerability or any kind of failure,
            abnormal behavior of software (e.g., smart contract), blockchains,
            or any other features of or inherent to the Digital Assets or Items.
          </p>
          <p className="text-[17px] font-bold text-center font-poppins">
            2024 © MEMESTATE. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
