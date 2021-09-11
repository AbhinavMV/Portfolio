import { RiMacbookLine, RiMacFill, RiMacLine, RiMailCheckFill, RiServerFill } from "react-icons/ri";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
export const aboutData = [
  {
    title: "Frontend Development",
    description:
      "I can build a beautiful and scalable SPA using <strong>HTML</strong>,<strong>CSS</strong> and <strong>React.js/Next.js</strong>",
    icon: RiMacLine,
  },
  {
    title: "Backend Development",
    description:
      "Handle database, sever api using <strong>Express</strong> and other popular frameworks",
    icon: RiServerFill,
  },
  {
    title: "API Development",
    description: "I can build robust API using <strong>REST</strong> and <strong>GraphQL</strong>",
    icon: AiOutlineApi,
  },
  {
    title: "Competitive Coder",
    description: "Daily problem solver in <strong>HackerRank</strong> or <strong>Leetcode</strong>",
    icon: MdDeveloperMode,
  },
];

export const languagesAndFrameworks = [
  {
    name: "Python",
    percent: "10/12",
  },
  {
    name: "Java Script",
    percent: "8/12",
  },
  {
    name: "Reactjs and Nextjs",
    percent: "10/12",
  },
  {
    name: "Nodejs",
    percent: "6/12",
  },
  {
    name: "Graphql",
    percent: "8/12",
  },
];

export const Others = [
  {
    name: "Tailwind",
    percent: "10/12",
  },
  {
    name: "Material UI",
    percent: "8/12",
  },
  {
    name: "MongoDB",
    percent: "8/12",
  },
  {
    name: "SQL",
    percent: "10/12",
  },
];

export const projects = [
  {
    name: "Blog",
    githubLink: "https://github.com/AbhinavMV/blog",
    demoLink: "https://inspire-poem-blog.netlify.app/",
    desc: "A blog site to share your thoughts. This is a Fullstack application using MERN stack.",
    technology: "Reactjs,MongoDB,Express,Nodejs",
  },
  {
    name: "Moments",
    githubLink: "https://github.com/AbhinavMV/Moments",
    demoLink: "NA",
    desc: "A social media site. This is a Fullstack application using MERNG stack.",
    technology: "Reactjs,MongoDB,Express,Nodejs,Graphql",
  },
  {
    name: "Realtime Chat",
    githubLink: "https://github.com/AbhinavMV/whatsapp-clone",
    demoLink: "http://whatsapp-clone-abhinavmv.vercel.app/",
    desc: "A Whatsapp like chat app with one-to-one chats and a global chat",
    technology: "Nextjs,Firebase",
  },
  {
    name: "ShareFile",
    githubLink: "https://github.com/AbhinavMV/sharefile",
    demoLink: "http://sharefile-mu.vercel.app/",
    desc: "A Simple app to share your files with friends/family",
    technology: "Nextjs,MongoDB",
  },
];
