import AboutCard from "../components/AboutCard";
import { aboutData } from "../data";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <p className="mx-4 py-5">
        I am curently working at TCS as a designer. Mainly working on Financial CRM. I completed my
        B.Tech (Computer Science) in 2020. I also have 1+ year self experience in Web Development.
      </p>
      <div className="bg-gray-300 dark:bg-black-700 flex-grow p-4">
        <h1 className="text-2xl font-semibold mt-2 ml-2 mb-4">What I am doing</h1>
        <div className="grid grid-cols-2 justify-items-stretch">
          {aboutData.map((data, index) => (
            <div className="col-span-2 md:col-span-1" key={index}>
              <AboutCard
                data={data}
                icon={<data.icon className="w-10 h-10 m-2 text-blue-light" />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
