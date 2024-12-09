import React from "react";

const BlogPaginationDot = ({ active }) => (
  <span
    className={`w-3 h-3 rounded-full mx-1 ${
      active ? "bg-purple-500" : "bg-gray-300"
    }`}
  ></span>
);

export default BlogPaginationDot;
