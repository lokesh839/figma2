import React from "react";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const CallToAction = ({  buttonHref }) => (
  <div className="bg-gray-800 py-16 h-[472px] ">
    <div className="max-w-7xl mx-auto text-center justify-center mt-16">
      <h1 className=" text-3xl lg:text-5xl text-white font-bold mb-5">Do you have Project Idia? <br />
      Let's discuss your project!</h1>
      <Paragraph className=" text-white leading-6 text-md lg:text-sm  mb-5"> There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration. </Paragraph>
      <Button
        href={buttonHref}
        className="bg-purple-600 text-white font-semibold hover:bg-purple-700"
      >
        Let's work Together &#129106;
      </Button>
    </div>
  </div>
);

export default CallToAction;
