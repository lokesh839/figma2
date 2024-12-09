import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Card from "../molecules/Card";
import { LuLaptop } from "react-icons/lu";
import { FaRegCalendarAlt, FaPencilAlt, FaChartLine } from "react-icons/fa";



const WorkProcess = () => (
  <div className="bg-gray-100 py-16 relative">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start space-y-10 lg:space-y-0 lg:space-x-8 mt-36 ">
      <div className="w-full lg:w-1/2 text-left mt-10 lg:mt-44 px-4">
        <Heading className="text-xl md:text-2xl lg:text-4xl font-bold ">
          Work Process
        </Heading>
        <Paragraph className="text-sm md:text-sm lg:text-lg leading-6 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
          varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac
          vestibulum.
        </Paragraph><br />
        <Paragraph className="text-sm md:text-sm lg:text-lg leading-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
          varius eget velit non.
        </Paragraph>
      </div>


      <div className="grid grid-col-1 sm:grid-col-2 gap-y-4  lg:w-2/2 text-left">
        <Card
          i={<FaRegCalendarAlt className=""/>}
          title="1. Research"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
          className="bg-white"
        />
          <Card
          i={<FaPencilAlt />}
          title="3. Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
        />
          
       
      </div>

      <div className="grid grid-col-1 sm:grid-col-2 gap-y-4  lg:w-2/2 text-left ">
        
      <Card
          i={<FaChartLine />}
          title="2. Analyze"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
          className='mt-10'
        />   
       
        <Card
          i={<LuLaptop />}
          title="4. Launch"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu."
        />
      </div>
    </div>
  </div>
);

export default WorkProcess;
