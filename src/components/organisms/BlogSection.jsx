import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import BlogCard from "../molecules/BlogCard";
import BlogPaginationDot from "../atoms/BlogPaginationDot";

const BlogSection = () => (
<div class="bg-gradient-to-br from-[rgb(255,240,245)] via-[rgb(255,250,255)] to-[rgb(240,245,255)] py-16">
<div className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
       <div className=" text-3xl lg:text-4xl mb-5">
       <Heading className="">Blog</Heading> 
       </div>

        <Paragraph className="">
          There are many variations of passages of Lorem Ipsum available,<br /> but
          the majority have suffered alteration.
        </Paragraph>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <BlogCard
            imageSrc="./images/blog1.png"
            date="22 Oct, 2023"
            comments="234"
            title="Lorem ipsum dolor sit consetetur adipiscing elit."
          />
          <BlogCard
            imageSrc="./images/blog2.png"
            date="22 Oct, 2023"
            comments="234"
            title="Lorem ipsum dolor sit consetetur adipiscing elit."
          />
          <BlogCard
            imageSrc="./images/blog3.png"
            date="22 Oct, 2023"
            comments="234"
            title="Lorem ipsum dolor sit consetetur adipiscing elit."
          />
          <BlogCard
            imageSrc="./images/blog4.png"
            date="22 Oct, 2023"
            comments="234"
            title="Lorem ipsum dolor sit consetetur adipiscing elit."
          />
        </div>

        <div className="flex justify-center items-center mt-8">
          <BlogPaginationDot />
          <BlogPaginationDot active />
          <BlogPaginationDot />
        </div>
      </div>
    </div>
  </div>
);

export default BlogSection;
