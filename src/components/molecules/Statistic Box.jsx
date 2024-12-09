import React from "react";

const StatisticBox = ({ title, value, className }) => (
  <div className={`text-center ${className}`}>
    <h2 className="text-2xl lg:text-3xl font-bold text-black">{value}</h2>
    <p className="text-gray-600">{title}</p>
  </div>
);

export default StatisticBox;
