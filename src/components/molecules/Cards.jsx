import React from "react";
import Paragraph from "../atoms/Paragraph";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";

const Cards = ({ image, category, title, description, buttonText, buttonHref }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 sm:h-56 object-cover" />
    <div className="p-4 sm:p-6 text-left">
      <Paragraph className="text-sm text-gray-500 mb-2">{category}</Paragraph>
      <Heading className="text-base sm:text-lg font-semibold mb-4">{title}</Heading>
      <Paragraph className="mt-4 text-lg lg:text-sm text-gray-600 mb-4">{description}</Paragraph><br />
      <Button
        href={buttonHref}
        className="bg-white text-purple-500 border-2 border-purple-300 hover:bg-purple-100 text-sm sm:text-base"
      >
        {buttonText} &#129106;
      </Button>
    </div>
  </div>
);

export default Cards;
