import { BsFillCircleFill } from "react-icons/bs";
function InfoCard({ lang }) {
  return (
    <div className="bg-gray-400 flex rounded-full my-2">
      <div
        className={`rounded-full  bg-gradient-to-r from-blue-light to-blue-dark ${
          "w-" + lang.percent
        }`}
      >
        <div className="flex p-1 items-center">
          <BsFillCircleFill className="w-4 h-4 ml-2" />
          <h2 className={`ml-2 text-lg font-semibold`}>{lang.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
