import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const RedirectButton = ({
  path,
  heading,
  subheading,
  icon,
  textColor = "text-white",
  arrowIconColor = "text-white",
  mainIconColor = "text-white",
  mainIconBgColor = "bg-primary",
  hovermainIconcolor = "text-primary",
  hoverMainIconBgColor = "bg-white",
  margin = "my-2",
}) => {
  return (
    <Link to={path}>
      <button
        className={`flex w-full sm:w-auto rounded-full items-center justify-between gap-4 border-2 border-gray-500 p-4 group ${margin}`}
      >
        {/* Left Icon */}
        <div
          className={`${mainIconColor} ${mainIconBgColor} p-2 sm:p-3 rounded-full transition-all duration-150 ease-in-out group-hover:${hoverMainIconBgColor} group-hover:${hovermainIconcolor}`}
        >
          {icon}
        </div>

        {/* Text Section */}
        <div className="text-left">
          <p className={`font-bold ${textColor} text-sm sm:text-base`}>
            {heading}
          </p>
          <p className={`${textColor} text-xs sm:text-sm`}>{subheading}</p>
        </div>

        {/* Right Arrow Icon */}
        <div
          className={`arrow_icon rounded-full border-2 border-gray-500 ${arrowIconColor} p-1 sm:p-2`}
        >
          <ArrowRightAltIcon />
        </div>
      </button>
    </Link>
  );
};

export default RedirectButton;
