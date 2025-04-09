import { motion } from "framer-motion";

const AboutCard = ({ title, content, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeOut",
      }}
      className="about_card bg_gradient  p-5 rounded-md flex gap-2 flex-col my-2 relative"
      key={index}
    >
      <div className="card_icon text-primary w-10 h-10 bg-white flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h3 className="card_heading text-2xl font-bold text-white">{title}</h3>
      <p className="card_content text-xl text-white">{content}</p>
    </motion.div>
  );
};

export default AboutCard;
