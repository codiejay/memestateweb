// const Navbar = () => {
//   const socialIcon = [
//     {
//       name: "X",
//       icon: "/images/x.svg", // Path or icon name
//       link: "https://www.twitter.com",
//     },
//     {
//       name: "Tiktok",
//       icon: "/images/tiktok.svg",
//       link: "https://www.twitter.com",
//     },
//     {
//       name: "Discord",
//       icon: "/images/discord.svg",
//       link: "https://www.linkedin.com",
//     },
//     {
//       name: "Telegram",
//       icon: "/images/telegram.svg",
//       link: "https://www.linkedin.com",
//     },
//     {
//       name: "Youtube",
//       icon: "/images/youtube.svg",
//       link: "https://www.github.com",
//     },
//   ];
//   const links = [
//     {
//       name: "About us",
//       icon: "/images/x.svg", // Path or icon name
//       link: "https://www.twitter.com",
//     },
//     {
//       name: "Roadmap",
//       icon: "/images/tiktok.svg",
//       link: "https://www.twitter.com",
//     },
//     {
//       name: "Docs",
//       icon: "/images/discord.svg",
//       link: "https://www.linkedin.com",
//     },
//     {
//       name: "Redeem winnings",
//       icon: "/images/telegram.svg",
//       link: "https://www.linkedin.com",
//     },
//   ];

//   return (
//     <header className="w-full absolute bg-transparent top-0 left-0 py-3 px-24 z-[100000]">
//       <div className="grid grid-cols-3 ">
//         <div></div>
//         <div className="flex justify-center">
//           <img src="/images/logo.svg" alt="" className="w-[136px]" />
//         </div>
//         <div className="flex gap-4 justify-end">
//           {socialIcon.map((icon, index) => {
//             return (
//               <a href={icon.link} key={index}>
//                 <img src={icon.icon} alt={icon.name} />
//               </a>
//             );
//           })}
//         </div>
//       </div>
//       <nav>
//         <ul className="flex justify-center my-3 gap-12">
//           {links.map((link, index) => {
//             return (
//               <li key={index} className="text-2xl font-normal  text-white ">
//                 <a href="">{link.name}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
export const links = [
  {
    name: "About us",
    icon: "/images/x.svg",
    link: "https://www.twitter.com",
  },
  {
    name: "Roadmap",
    icon: "/images/tiktok.svg",
    link: "https://www.twitter.com",
  },
  {
    name: "Docs",
    icon: "/images/discord.svg",
    link: "https://www.linkedin.com",
  },
  {
    name: "Redeem winnings",
    icon: "/images/telegram.svg",
    link: "https://www.linkedin.com",
  },
];

export const socialIcon = [
  {
    name: "X",
    icon: "/images/x.svg",
    link: "https://www.twitter.com",
  },
  {
    name: "Tiktok",
    icon: "/images/tiktok.svg",
    link: "https://www.twitter.com",
  },
  {
    name: "Discord",
    icon: "/images/discord.svg",
    link: "https://www.linkedin.com",
  },
  {
    name: "Telegram",
    icon: "/images/telegram.svg",
    link: "https://www.linkedin.com",
  },
  {
    name: "Youtube",
    icon: "/images/youtube.svg",
    link: "https://www.github.com",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full absolute bg-transparent top-0 left-0 py-3 px-6 md:px-24 z-[100000]">
      <div className="grid grid-cols-3 items-center">
        <div className="flex items-center">
          {/* Hamburger button */}
          <button
            className="md:hidden text-white text-2xl hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <div className="flex justify-center">
          <img src="/images/logo.svg" alt="" className="w-[136px]" />
        </div>
        <div className=" gap-4 justify-end lg:flex hidden">
          {socialIcon.map((icon, index) => (
            <a href={icon.link} key={index}>
              <img src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
      </div>
      <nav>
        <ul
          className={`flex flex-col md:flex-row md:justify-center my-3 gap-6 md:gap-16 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className="text-xl md:text-xl font-normal text-white"
            >
              <a href={link.link} className="text-white">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
