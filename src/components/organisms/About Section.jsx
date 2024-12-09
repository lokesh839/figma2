import React from "react";
import SocialLinks from '../molecules/Social Links'
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { MdOutlineFileDownload } from "react-icons/md";


const   AboutSection = () => (
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-lg shadow-lg p-6 space-y-6 lg:space-y-0">
      <div className="relative flex justify-center ">
        <Image src="./images/men.png" alt="About Image" className="rounded-lg w-[300px] lg:w-[400px]" />
        <SocialLinks className="absolute bottom-10 left-1/2 transform -translate-x-1/2" />
      </div>

      <div className="text-left lg:w-4/5">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          I am a Professional User <br /> Experience Designer
        </h2>
        <p className=" text-sm lg:text-md leading-6 text-gray-600 mb-6">
          I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.
        </p>
        <p className=" text-sm lg:text-md leading-6 text-gray-600 mb-6">
          I design and develop services for customers specializing creating stylish, modern websites, web services.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-purple-700 text-white px-4  py-2  hover:bg-purple-800">
            My Projects
          </Button>
          <Button className="bg-white text-purple-500 px-4  py-2  border-2 border-purple-500 flex items-center">
            <i> <MdOutlineFileDownload className=" text-2xl" /></i>
            <span className="text-md">Download CV</span>

          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
