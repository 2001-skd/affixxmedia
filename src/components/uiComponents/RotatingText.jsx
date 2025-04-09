import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const RotatingText = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const items = [
    {
      id: 1,
      item: "Digital Marketing",
    },
    {
      id: 2,
      item: "Web Developement",
    },
    {
      id: 3,
      item: "Content Creation",
    },
    {
      id: 4,
      item: "Film Promotion",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setItemIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence>
      <motion.h3
        key={items[itemIndex].id}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ease: "easeInOut" }}
        className="text-white font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl  flex-grow-1 absolute"
      >
        {items[itemIndex].item}
      </motion.h3>
    </AnimatePresence>
  );
};

export default RotatingText;
