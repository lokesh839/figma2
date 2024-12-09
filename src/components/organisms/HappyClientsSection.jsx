import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";


const HappyClientsSection = () => (
  <div className="">
    <div className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <Heading className="text-3xl mb-4">Happy Clients</Heading>
        <Paragraph className="mt-8">
          There are many variations of passages of Lorem Ipsum available,<br /> but the
          majority have suffered alteration.
        </Paragraph>
        <img src="./images/font.png" alt="Client Logos" className="w-full h-[200px]" />
      </div>
    
    
    </div>


  </div>
);

export default HappyClientsSection;
