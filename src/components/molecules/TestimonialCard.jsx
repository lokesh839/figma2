import React from "react";

const TestimonialCard = ({ quote, author, position }) => (
  <div className="text-center mb-7">
    <p className="text-gray-800 items-center text-lg mb-6">{quote}</p>
    <h4 className="block font-bold">{author}</h4>
    <p className="text-gray-500">{position}</p>
  </div>
);

export default TestimonialCard;
