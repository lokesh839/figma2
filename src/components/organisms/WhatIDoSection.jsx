import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import InfoCard from"../molecules/InfoCard "

const WhatIDoSection = () => (
  <div className="py-16 bg-gray-100 ">
    <div className="max-w-7xl mx-auto  px-12 flex flex-col lg:flex-row items-start lg:space-x-16">
      {/* Left Column */}
      <div className=" lg:w-2/4 text-left mt-28">
      <div className=" mb-5">
      <Heading className="text-3xl font-bold ">What I do?</Heading>
      </div>
        <Paragraph className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendisse imperdiet.
        </Paragraph>
        <Paragraph className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci.
        </Paragraph>
        <Button className="bg-purple-600 text-white">Say Hello!</Button>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2  mt-10 lg:mt-0 space-y-6 text-left  ">
       <div className=" border-l-4 border-purple-600">
       <InfoCard
          title="User Experience (UX)"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
        />
       </div>
        <InfoCard
          title="User Interface (UI)"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
        />
        <InfoCard
          title="Web Development"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum."
        />
      </div>
    </div>
  </div>
);

export default WhatIDoSection;
