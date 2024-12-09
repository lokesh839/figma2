import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

const InfoCard = ({ title, content }) => (
  <div className={`bg-white shadow-md rounded-lg p-6  `}>
    <Heading className="text-lg font-semibold mb-2">{title}</Heading>
    <Paragraph>{content}</Paragraph>
  </div>
);

export default InfoCard;
