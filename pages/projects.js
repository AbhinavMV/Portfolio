import Image from "next/image";
import { projects } from "../data";

function Projects() {
  return (
    <div>
      <div className="grid grid-cols-6 p-4 m-2 overflow-y-scroll" style={{ height: "70vh" }}>
        {projects.map((project) => (
          <div
            className="flex flex-col items-center col-span-6 m-2 my-auto mt-2 bg-gray-300 md:col-span-3 2xl:col-span-2 dark:bg-black-500"
            key={project.name}
          >
            <div className="w-full min-h-full p-4">
              <Image
                src={"/blog.PNG"}
                layout="responsive"
                width={800}
                height={600}
                quality={65}
                objectFit="contain"
              />
            </div>
            <h1 className="mb-2 -mt-2 text-2xl font-semibold">{project.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
