import React from "react";
import AuroraGradient from "./AuroraGradient";
import RotatingText from "../uiComponents/RotatingText";
import Marquee from "../uiComponents/Marquee";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CallIcon from "@mui/icons-material/Call";
import { motion, px, useScroll, useTransform } from "framer-motion";
import RedirectButton from "../uiComponents/RedirectButton";
import WaveText from "../uiComponents/WaveText";

const HeroBanner = () => {
  return (
    <AuroraGradient className="relative min-h-screen overflow-hidden">
      <div className="relative flex flex-col items-center justify-center w-full px-4 py-10 text-center">
        {/* Main Heading */}
        <div className="w-full">
          <WaveText
            text="affixx Media Provides"
            tag="h3"
            className="text-[#435739] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
          />
          {/* <motion.h3 className="text-[#435739] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
            affixx Media Provides
          </motion.h3> */}
        </div>

        {/* Sub Heading */}
        <motion.div className="w-full mt-4">
          <WaveText
            text="Innovative Solutions For"
            tag="h3"
            className="text-primary font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
          />
          {/* <motion.h3 className="text_gradient font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            Innovative Solutions For
          </motion.h3> */}
        </motion.div>

        {/* Rotating Text */}
        <div className="w-full mt-10 sm:mt-16 flex justify-center items-center">
          <RotatingText />
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute top-[50%] sm:top-[65%] w-full flex flex-col sm:flex-row items-center justify-center gap-6 px-4 flex-wrap">
        <RedirectButton
          path="/contact"
          heading="Ready To Work With Us?"
          subheading="Contact Us"
          icon={<CallIcon />}
        />

        <RedirectButton
          path="/services"
          heading="Accelerate Your Digital Presence"
          subheading="Our Services"
          icon={<DesignServicesIcon />}
        />
      </div>

      {/* Marquee */}
      <Marquee
        bg="primary_color"
        content="Web Development * Digital Marketing * Content Creation * Film Promotion * Web Development * Digital Marketing * Content Creation * Film Promotion *"
      />
    </AuroraGradient>
  );
};

export default HeroBanner;
