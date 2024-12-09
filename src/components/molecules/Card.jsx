import React from "react";

const Card = ({ title, description, i, className }) => (
  <div className={`bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-start w-[312px] h-[276px] ${className}`}>
    <div className=" p-4 rounded-lg mb-4 text-2xl text-white bg-purple-500">{i}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-lg lg:text-sm text-gray-600 mt-2">{description}</p>
  </div>
);

export default Card;
