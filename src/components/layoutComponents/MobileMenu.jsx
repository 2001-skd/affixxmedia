import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MobileMenu = ({ navItems, socialMediaLinks, isMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  // toggle dropdown starts
  function handleDropDown(key) {
    setActiveDropdown((prev) => (prev === key ? null : key));
  }
  // toggle dropdown ends
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0,
          }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#435739]"
        >
          <ul
            className={`md:hidden text-white space-y-4 mt-16 bg-[#435739] px-5 py-5 w-full h-screen overflow-y-hidden relative left-0 ${
              isMenuOpen
                ? "fixed top-0 left-0 right-0 transition-all ease-in-out duration-300 z-50"
                : "hidden"
            }`}
          >
            {navItems.map((value, index) => (
              <li key={index} className="w-full">
                <div
                  className="flex items-center justify-between text-xl"
                  onClick={() => value.submenu && handleDropDown(index)}
                >
                  <NavLink
                    to={value.path}
                    className={({ isActive }) =>
                      isActive
                        ? "underline underline-offset-4"
                        : "hover:underline"
                    }
                  >
                    {value.page}
                  </NavLink>
                  {value.submenu && (
                    <KeyboardArrowDownIcon
                      style={{
                        transform:
                          activeDropdown === index
                            ? "rotate(180deg)"
                            : "rotate(0)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                </div>

                {/* Submenu */}
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col pl-4 py-2 gap-2 bg-[#a7b194] rounded-md mt-2"
                    >
                      {value.submenu.map((sub, i) => (
                        <li key={i} className="text-xl">
                          <NavLink
                            to={sub.path}
                            className="block hover:underline"
                          >
                            {sub.page}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}

            {/* social media icon starts */}
            <div className="social_media_icons block md:hidden">
              <ul className="flex items-center justify-center gap-5">
                {socialMediaLinks.map((value) => (
                  <li key={value.name}>
                    <a
                      className="text-white hover:translate-y-5 group"
                      href="#"
                    >
                      <value.icon className="group-hover:-translate-y-1 transition-all duration-100 ease-linear" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* social media icon ends */}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
