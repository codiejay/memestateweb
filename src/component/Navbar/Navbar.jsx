import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Smooth scrolling for internal links
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Navigation and Social Links
export const links = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/aboutus" },
  { name: "Roadmap", path: "/#roadMap" }, // HashLink for internal navigation
  {
    name: "Pitch Deck",
    path: "https://www.canva.com/design/DAGNpJF53qg/8IbGbX-DQeowe9bsDXJL_g/edit",
    external: true,
  },
  {
    name: "Docs",
    path: "https://coda.io/d/Memestate-Documentation_dXAqkGQes4-/Pitch-deck_suxYHrfT#_lulBjKkD",
    external: true,
  },
];

const SOCIAL_ICONS = [
  { name: "X", icon: "/images/x.svg", link: "https://x.com/memestate_" },
  {
    name: "Tiktok",
    icon: "/images/tiktok.svg",
    link: "https://www.tiktok.com/@memestatep2e",
  },
  {
    name: "Instagram",
    icon: "/images/ig.svg",
    link: "https://www.instagram.com/memestateonbase/",
  },
  {
    name: "Youtube",
    icon: "/images/youtube.svg",
    link: "https://www.youtube.com/@memestatep2",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState("absolute top-8");

  useEffect(() => {
    // Update the navbar position based on the current path
    if (location.pathname === "/about-us") {
      setNavbarPosition("relative");
    } else {
      setNavbarPosition("absolute top-8");
    }
  }, [location.pathname]);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`w-full bg-transparent ${navbarPosition}  px-6 md:px-24 z-[100000]`}
    >
      <div className="grid grid-cols-3 items-center">
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <div></div>

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/images/logo2.png"
            alt="Memestate logo"
            className="w-[136px]"
          />
        </div>

        {/* Social Icons */}
        <div className="gap-4 justify-end lg:flex hidden">
          {SOCIAL_ICONS.map((icon, index) => (
            <a
              href={icon.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${icon.name}`}
            >
              <img src={icon.icon} alt={icon.name} />
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav>
        <div
          className={`flex flex-col md:flex-row md:justify-center gap-6 md:gap-16 lg:h-[unset] h-screen lg:bg-[transparent] bg-[#2E3192] lg:py-2 lg:px-0 py-8 px-5 lg:relative fixed  lg:w-full w-4/5 left-0 top-0 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <div className="flex  justify-end">
            <button onClick={closeMenu}>
              <img src="/images/closeblack.svg" alt="close" className="w-9" />
            </button>
          </div>

          <ul className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-16">
            {links.map((link, index) => (
              <li key={index} className="text-xl font-normal text-white">
                {link.external ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                    aria-label={link.name}
                  >
                    {link.name}
                  </a>
                ) : link.path.includes("#") ? (
                  <HashLink
                    to={link.path}
                    smooth
                    className="text-white hover:underline"
                    aria-label={link.name}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    to={link.path}
                    className="text-white hover:underline"
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
