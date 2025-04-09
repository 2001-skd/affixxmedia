import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WaveText = ({ tag: Tag, className, text, styledWords = {} }) => {
  const waveTextRef = useRef(null);
  const isInView = useInView(waveTextRef, { once: true });
  return (
    <Tag ref={waveTextRef} className={className}>
      {text.split(" ").map((word, wordIndex) => {
        const isStyled = styledWords[word.replace(/[^\w]/g, "")];
        const extraClass = isStyled || "";

        return (
          <span key={wordIndex} className="whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { y: [10, -10, 0], opacity: 1 } : {}}
                transition={{
                  delay: wordIndex * 0.5 + charIndex * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`inline-block ${extraClass}`}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        );
      })}
    </Tag>
  );
};

export default WaveText;
