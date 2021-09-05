import { aboutData } from "../data";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <p className="mx-4 py-5">
        I am curently working at TCS as a designer. Mainly working on Financial CRM using Siebel and
        SQL. I completed my B.Tech (Computer Science) in 2020. I also have 1+ year experience in Web
        Development.
      </p>
      <div className="bg-gray-500 dark:bg-black-700 flex-grow p-4">
        <h1>What I am doing</h1>
        <div className="grid grid-cols-2">
          {aboutData.map((data) => (
            <div className="col-span-2 md:col-span-1">
              <h1>{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
