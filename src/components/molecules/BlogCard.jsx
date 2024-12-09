import React from "react";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";

const BlogCard = ({ imageSrc, date, comments, title }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <Image src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 text-left">
      <Paragraph className="text-sm text-gray-500 mb-2">
        {date} | {comments} Comments
      </Paragraph>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

export default BlogCard;
