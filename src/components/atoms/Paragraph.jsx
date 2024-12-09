import React from "react";

const Paragraph = ({ children, className }) => (
  <p className={`text-sm lg:text-md text-gray-600  ${className}`}>{children}</p>
);

export default Paragraph;
