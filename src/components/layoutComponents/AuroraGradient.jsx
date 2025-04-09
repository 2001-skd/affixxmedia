import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  easeInOut,
} from "framer-motion";
import React, { useEffect } from "react";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraGradient = ({ children, className }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity, // Repeat the animation infinitely
      repeatType: "mirror",
    });
  }, [color]);
  return (
    <motion.section style={{ backgroundImage }} className={className}>
      {children}
    </motion.section>
  );
};

export default AuroraGradient;
