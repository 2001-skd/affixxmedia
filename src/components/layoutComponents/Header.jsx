import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Link, NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      page: "Index",
    },
    {
      path: "/about",
      page: "About",
    },
    {
      path: "/services",
      page: "Service",
      submenu: [
        {
          path: "/services/digital_marketing",
          page: "Digital Marketing",
        },
        {
          path: "/services/content_creation",
          page: "Content Creation",
        },
        {
          path: "/services/web_developement",
          page: "Web Developement",
        },
        {
          path: "/services/film_promotion",
          page: "Film Promotion",
        },
      ],
    },
    {
      path: "/contact",
      page: "Contact",
    },
  ];

  const socialMediaLinks = [
    {
      name: "Linkedin",
      icon: LinkedInIcon,
      link: "#",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      link: "#",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      link: "#",
    },
    {
      name: "x",
      icon: XIcon,
      link: "#",
    },
  ];

  // toggle menu starts
  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  // toggle menu ends

  return (
    <header className="glass-bg relative">
      <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-[100%]">
          <NavLink to="/" className="text-white font-bold text-2xl">
            affixx Media
          </NavLink>
          {/* navbar items starts */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 text-white md:flex-row flex-col">
              {navItems.map((value) => (
                <li className={` ${value.submenu ? "relative group" : ""}`}>
                  <NavLink
                    to={value.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "underline underline-offset-4 transition-all duration-100 ease-linear"
                        : ""
                    }
                  >
                    {value.page}{" "}
                    {value.submenu ? (
                      <KeyboardArrowDownIcon style={{ width: "15px" }} />
                    ) : (
                      ""
                    )}
                  </NavLink>

                  {value.submenu ? (
                    <ul
                      className="absolute glass-bg w-[250px] flex gap-5 flex-col p-2 -left-[50px] top-[100%] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-in-out rounded-md
"
                    >
                      {value.submenu.map((submenus) => (
                        <li className="hover:bg-secondary p-2 rounded-md">
                          <NavLink to={submenus.path}>{submenus.page}</NavLink>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* navbar items ends */}

          {/* social media icon starts */}
          <div className="social_media_icons hidden md:block">
            <ul className="flex items-center justify-center gap-5">
              {socialMediaLinks.map((value) => (
                <li key={value.name}>
                  <a className="text-white hover:translate-y-5 group" href="#">
                    <value.icon className="group-hover:-translate-y-1 transition-all duration-100 ease-linear" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* social media icon ends */}
          {/* menu toggle starts */}
          <button className="md:hidden block" onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className={`text-white`} />
            ) : (
              <MenuIcon className={`text-white`} />
            )}
          </button>
          {/* menu toggle ends */}
        </div>
        {/* menu mobile starts */}
        <MobileMenu
          navItems={navItems}
          socialMediaLinks={socialMediaLinks}
          isMenuOpen={isMenuOpen}
        />
        {/* menu mobile ends */}
      </div>
    </header>
  );
};

export default Header;
