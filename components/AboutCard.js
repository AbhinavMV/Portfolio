import React from "react";

function AboutCard({ data, icon }) {
  const { title, description } = data;
  return (
    <div className="flex items-center border dark:border-black-500 rounded-xl m-2 p-2 space-x-1.5 bg-gray-100 dark:bg-black-500">
      {/* {React.createElement(icon, { width: 8, height: 12 })}
       */}
      {icon}
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default AboutCard;
