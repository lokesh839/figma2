import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Cards from "../molecules/Cards";

const Portfolio = () => (
  <div className="w-full py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}

      <div className="text-center mb-12">
        <Heading className="text-2xl sm:text-3xl lg:text-4xl">Portfolio</Heading>
        <Paragraph className="mt-4 text-lg lg:text-sm">
          There are many variations of passages of Lorem Ipsum available,<br />
          but the majority have suffered alteration.
        </Paragraph>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Cards
          image="./images/work1.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
        <Cards
          image="./images/work2.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
        <Cards
          image="./images/work3.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
        <Cards
          image="./images/work4.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
        <Cards
          image="./images/work5.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
        <Cards
          image="./images/work6.png"
          category="UI/UX DESIGN"
          title="Product Admin Dashboard"
          description="Vivamus eleifend convallis nulla, non pharetra libero maximus laoreet. Donec id imperdiet lacus."
          buttonText="Case Study"
          buttonHref="#"
        />
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <Button href="#" className="bg-purple-600 text-white hover:bg-purple-700 text-base sm:text-xl">
          More Projects
        </Button>
      </div>
    </div>
  </div>
);

export default Portfolio;
