import { useTheme } from "next-themes";
import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiMapPinLine } from "react-icons/ri";
function Sidebar() {
  const { theme, setTheme } = useTheme();

  const toggleUI = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex flex-col items-center justify-center dark:text-white py-4">
      <div className="relative w-32 h-32 my-2">
        <Image src="/profile.jpg" layout="fill" className="rounded-full object-cover" />
      </div>
      <h1 className="text-4xl font-dancing font-bold tracking-wider ">
        <span className="text-blue-light ">Abhinav</span> MV
      </h1>
      <p className="bg-gray-300 dark:bg-gray-800 rounded-full w-11/12 text-center m-1 py-2">
        Web Developer
      </p>
      <p className="bg-gray-300 dark:bg-gray-800 rounded-full w-11/12 text-center m-1 py-2">
        Download Resume
      </p>
      <div className="flex m-2 justify-around w-full">
        <RiInstagramFill className="w-8 h-8 text-blue-light" />
        <RiLinkedinBoxFill className="w-8 h-8 text-blue-light" />
        <RiGithubFill className="w-8 h-8 text-blue-light" />
      </div>
      <div className="bg-gray-300 dark:bg-gray-800 min-w-full text-center  space-y-2 py-2 my-2">
        <div className="flex items-center justify-center">
          <RiMapPinLine className="w-6 h-6 text-white" />
          <p>UP,India</p>
        </div>
        <p>mvabhinav1998@gmail.com</p>
        <p>9874563214</p>
      </div>
      <button className="bg-gradient-to-r from-blue-light to-blue-dark w-6/12 my-2 py-2 rounded-full active:outline-none">
        Email Me
      </button>
      <button
        onClick={toggleUI}
        className="bg-gradient-to-r from-blue-light to-blue-dark w-6/12 my-2 py-2 rounded-full active:outline-none"
      >
        Toggle UI
      </button>
    </div>
  );
}

export default Sidebar;
