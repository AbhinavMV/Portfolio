import { useTheme } from "next-themes";
import Image from "next/image";
import { RiGithubFill, RiLinkedinBoxFill, RiInstagramFill, RiMapPinLine } from "react-icons/ri";
function Sidebar() {
  const { theme, setTheme } = useTheme();

  const toggleUI = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex flex-col items-center justify-center py-4 dark:text-white">
      <div className="relative w-32 h-32 my-2">
        <Image src="/profile.jpg" layout="fill" className="object-cover rounded-full" />
      </div>
      <h1 className="text-4xl font-bold tracking-wider font-dancing ">
        <span className="text-blue-light ">Abhinav</span> MV
      </h1>
      <p className="w-11/12 py-2 m-1 font-semibold text-center bg-gray-300 rounded-full dark:bg-black-500">
        Web Developer
      </p>
      <p
        title="Not Available right now"
        className="w-11/12 py-2 m-1 font-semibold text-center bg-gray-300 rounded-full cursor-not-allowed dark:bg-black-500"
      >
        Download Resume
      </p>

      <div className="flex justify-around w-full m-2">
        <RiInstagramFill className="w-8 h-8 text-blue-light" />
        <RiLinkedinBoxFill className="w-8 h-8 text-blue-light" />
        <RiGithubFill className="w-8 h-8 text-blue-light" />
      </div>
      <div className="min-w-full py-2 my-2 space-y-2 text-center bg-gray-300 dark:bg-black-500 dark:shadow-xl">
        <div className="flex items-center justify-center">
          <RiMapPinLine className="w-6 h-6 text-black-700 dark:text-white" />
          <p>UP,India</p>
        </div>
        <p>mvabhinav1998@gmail.com</p>
        <p>9874563214</p>
      </div>
      <a
        href="mailto:mvabhinav1998@gmail.com"
        className="w-6/12 py-2 my-2 text-center rounded-full cursor-pointer bg-gradient-to-r from-blue-light to-blue-dark"
      >
        Email Me
      </a>
      <button
        onClick={toggleUI}
        className="w-6/12 py-2 my-2 rounded-full bg-gradient-to-r from-blue-light to-blue-dark active:outline-none"
      >
        Toggle UI
      </button>
    </div>
  );
}

export default Sidebar;
