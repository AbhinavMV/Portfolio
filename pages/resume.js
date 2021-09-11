import InfoCard from "../components/InfoCard";

import { languagesAndFrameworks, Others } from "../data";
function Resume() {
  return (
    <div className="m-2 p-2 space-y-2">
      <div className="grid grid-cols-2 space-y-2">
        <div className="col-span-2 md:col-span-1 space-y-1">
          <h1 className="text-3xl font-semibold">Education</h1>
          <h4 className="text-xl font-medium">Computer Science Engineering</h4>
          <h6 className="text-base font-medium">Govt. College of Eng. (2016-2020)</h6>
          <p className="text-base text-gray-600">
            Completed my B.Tech in CSE with a CGPA of <strong>8.46</strong>
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 space-y-1">
          <h1 className="text-3xl font-semibold">Experience</h1>
          <h6 className="text-base font-medium">Tata Consultancy Services(2016-2020)</h6>
          <p className="text-base text-gray-600">
            Adding various functionalities to the CRM using <strong>Siebel</strong> and{" "}
            <strong>SQL</strong>.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 space-y-2">
        <div className="p-1 col-span-2 md:col-span-1">
          <h1 className="text-2xl">Languages & Frameworks</h1>
          <div className="space-y-2 mr-4 text-white">
            {languagesAndFrameworks.map((lang) => (
              <InfoCard lang={lang} key={lang.name} />
            ))}
          </div>
        </div>

        <div className="p-1 col-span-2 md:col-span-1">
          <h1 className="text-2xl">Others</h1>
          <div className="space-y-2 mr-4 text-white">
            {Others.map((lang) => (
              <InfoCard lang={lang} key={lang.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
