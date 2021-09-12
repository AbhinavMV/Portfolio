import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { RiCloseCircleFill, RiGithubFill } from "react-icons/ri";
import { projects } from "../data";

function Projects() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const itemVariants = {
    initial: { y: 100 },
    target: (index) => ({
      y: 0,
      transition: { type: "easeIn", duration: index * 0.2, stiffness: 100 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="p-1 m-2 "
    >
      <div
        className={`p-4 ${!open ? "overflow-y-scroll" : "pb-4"}`}
        style={{
          height: "65vh",
        }}
      >
        <div className="relative grid grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <motion.div
              className="col-span-12 p-2 bg-gray-300 sm:col-span-6 lg:col-span-4 dark:bg-black-500 rounded-2xl"
              initial="initial"
              animate="target"
              variants={itemVariants}
              custom={index}
              key={index}
              style={{ transform: "none" }}
              onClick={() => {
                setSelected(project);
                setOpen(true);
              }}
            >
              <div className="">
                <div className="box-border relative block overflow-hidden">
                  <Image
                    src={`/${project.name}.PNG`}
                    layout="responsive"
                    width={1080}
                    height={720}
                    quality={100}
                    objectFit="contain"
                  />
                </div>
                <h1 className="mb-2 -mt-2 text-xl font-semibold text-center">{project.name}</h1>
              </div>
            </motion.div>
          ))}
          {open && (
            <SelectedProject project={selected} setSelected={setSelected} setOpen={setOpen} />
          )}
        </div>
      </div>
    </motion.div>
  );
}
const SelectedProject = ({ project, setSelected, setOpen }) => {
  return (
    <div
      key={project.name}
      className="absolute z-10 grid h-auto gap-6 p-6 bg-gray-200 rounded-lg opacity-100 1 md:grid-cols-2 dark:bg-black-700"
    >
      <div>
        <div className="box-border relative block overflow-hidden">
          <Image
            src={`/${project.name}.PNG`}
            layout="responsive"
            width={1080}
            height={720}
            quality={100}
            objectFit="contain"
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Link href={project.githubLink}>
            <span className="flex items-center justify-center flex-grow p-2 space-x-2 text-center bg-gray-400 rounded-lg cursor-pointer dark:bg-black-500">
              <RiGithubFill />
              <p className="font-medium">Github</p>
            </span>
          </Link>
          {project.demoLink !== "NA" && (
            <Link href={project.demoLink !== "NA" ? project.demoLink : "#"}>
              <span className="flex items-center justify-center flex-grow p-2 space-x-2 text-center bg-gray-400 rounded-lg cursor-pointer dark:bg-black-500">
                <AiFillProject />
                <p className="font-medium">Demo</p>
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <h1 className="text-2xl font-medium">{project.name}</h1>
        <p className="my-auto text-base">{project.desc}</p>
        <div className="flex flex-wrap my-auto mt-2">
          {project.technology.split(",").map((tech, index) => (
            <p
              key={index}
              className="p-2 m-1 text-sm tracking-wide bg-gray-400 rounded-lg dark:bg-black-500"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <RiCloseCircleFill
          className="w-8 h-8 m-4 text-red-600 dark:text-white"
          onClick={() => {
            setSelected(undefined);
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};
export default Projects;
