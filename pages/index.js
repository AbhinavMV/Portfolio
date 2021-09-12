import { motion } from "framer-motion";
import AboutCard from "../components/AboutCard";
import { aboutData } from "../data";

export default function Home() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const item = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.2 },
      y: 0,
    }),
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
      className="flex flex-col flex-grow"
    >
      <p className="py-5 mx-4">
        I am curently working at TCS as a designer. Mainly working on Financial CRM. I completed my
        B.Tech (Computer Science) in 2020. I also have 1+ year self experience in Web Development.
      </p>
      <div className="flex-grow p-4 bg-gray-300 dark:bg-black-700">
        <h1 className="mt-2 mb-4 ml-2 text-2xl font-semibold">What I am doing</h1>
        <div className="grid grid-cols-2 justify-items-stretch">
          {aboutData.map((data, index) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={item}
              custom={index}
              className="col-span-2 md:col-span-1"
              key={index}
            >
              <AboutCard
                data={data}
                icon={<data.icon className="w-10 h-10 m-2 text-blue-light" />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
