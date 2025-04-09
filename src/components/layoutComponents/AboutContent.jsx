import React, { useRef } from "react";
import RedirectButton from "../uiComponents/RedirectButton";
import InfoIcon from "@mui/icons-material/Info";
import WaveText from "../uiComponents/WaveText";
import InterestsIcon from "@mui/icons-material/Interests";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LayersIcon from "@mui/icons-material/Layers";
import JoinInnerIcon from "@mui/icons-material/JoinInner";
import AboutCard from "./AboutCard";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

const AboutContent = () => {
  const rightSectionRef = useRef(null);
  const aboutRef = useRef(null);
  const endRef = useRef(null);
  const isEndInView = useInView(endRef, { margin: "0px 0px -90% 0px" });

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end end"],
  });
  const delayedScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    delay: 0.5,
  });

  const borderHeight = useTransform(delayedScroll, [0, 1], ["0%", "100%"]);

  const aboutCardItems = [
    {
      icon: <InterestsIcon />,
      title: "Your Success, Our Mission",
      content:
        "We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.",
    },
    {
      icon: <MovieFilterIcon />,
      title: "Creators Of Digital Excellence",
      content:
        "At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.",
    },
    {
      icon: <LayersIcon />,
      title: "Innovating the Digital Landscape",
      content:
        "Innovation drives everything we do. We bring bold ideas and cutting-edge tech together to shape the future of the digital world, one project at a time.",
    },
    {
      icon: <JoinInnerIcon />,
      title: "Helping Brands Thrive Online",
      content:
        "Our purpose is simple: to help brands succeed in the digital age. We're passionate about building strong relationships with our clients and crafting custom strategies that drive results.",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6 lg:px-12 py-6 bg-red-500"
    >
      {/* Left Sticky Content */}
      <div
        className={`${
          isEndInView ? "static" : "md:sticky static"
        } top-0 h-fit bg-white p-4 sm:p-6 lg:p-8`}
      >
        <div className="heading space-y-4">
          <WaveText
            text="Who We Are?"
            tag="h4"
            className="text-primary font-semibold text-lg sm:text-xl"
          />
          <WaveText
            text="About affixx Media"
            tag="h3"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight"
          />
          <WaveText
            className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-2"
            text="Crafting unique digital experiences that elevate your brand"
            styledWords={{
              digital: "font-extrabold text_gradient",
              experiences: "font-extrabold text_gradient",
            }}
            tag="p"
          />
          <RedirectButton
            path="/about"
            heading="Want To Know More About Us ?"
            subheading="About Us"
            icon={<InfoIcon />}
            textColor="text-primary"
            arrowIconColor="text-primary"
            mainIconColor="text-white"
            mainIconBgColor="bg-primary"
            hovermainIconcolor="text-primary"
            hoverMainIconBgColor="bg-white"
            margin="my-3"
          />
        </div>
      </div>

      {/* Right Content with Scroll Border Animation */}
      <div
        ref={rightSectionRef}
        className="relative min-h-[400px] p-4 sm:p-6 lg:p-5"
      >
        {/* Animated Border */}
        <motion.div
          className="absolute left-0 top-0 w-[3px] bg-primary"
          style={{ height: borderHeight }}
        />

        {/* Card Items */}
        <div className="pl-5 space-y-6">
          {aboutCardItems.map((card, index) => (
            <AboutCard key={index} index={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
