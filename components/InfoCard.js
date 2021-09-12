import { BsFillCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

function InfoCard({ lang }) {
  const variants = {
    initial: { width: 0 },
    animate: {
      width: lang.percent,
      transition: { type: "spring", duration: 2, damping: 10, stiffness: 100 },
    },
  };
  return (
    <div className="flex my-2 bg-gray-400 rounded-full">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className={`flex rounded-full bg-gradient-to-r from-blue-light to-blue-dark`}
        style={{ width: lang.percent }}
      >
        <div className="flex items-center p-1">
          <BsFillCircleFill className="w-4 h-4 ml-2" />
          <h2 className={`ml-2 text-lg font-semibold`}>{lang.name}</h2>
        </div>
      </motion.div>
    </div>
  );
}

export default InfoCard;
