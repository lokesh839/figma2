import React from "react";
import Button from "../atoms/Button";
import StatisticBox from '../molecules/Statistic Box'
import Image from "../atoms/Image";

const HeroSection = () => (
  <section className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 py-12 space-y-10 lg:space-y-0 bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 text-gray-800">
    <div className="text-left w-full lg:w-1/2 mt-10 lg:mt-28">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
        Hello, I'm <br /> Brooklyn Gilbert
      </h1>
      <p className="text-base lg:text-lg text-gray-600 mb-6">
        I'm a Freelance{" "}
        <span className="border-b-2 border-red-300 z-10">UI/UX Designer</span> and{" "}
        <span className="border-b-2 border-red-300 z-10">Developer</span> based in London, England.
        I strive to build immersive and beautiful web applications through carefully crafted code
        and user-centric design.
      </p>
      <Button className="bg-purple-700 text-white px-6 py-3 hover:bg-purple-800">
        Say Hello!
      </Button>

      <div className="mt-10 lg:mt-28 flex flex-wrap gap-4">
        <StatisticBox title="Experience" value="15 Y." className="bg-purple-400 px-4 py-3 rounded-lg" />
        <StatisticBox title="Projects Completed" value="250+" className="bg-purple-400 px-4 py-3 rounded-lg" />
        <StatisticBox title="Happy Clients" value="58" className="bg-purple-400 px-4 py-3 rounded-lg" />
      </div>
    </div>

    <div className="flex justify-center">
      <Image
        src="./images/men.png"
        alt="Profile Image"
        className="rounded-lg w-[300px] lg:w-[536px] h-[400px] lg:h-[636px]"
      />
    </div>
  </section>
);

export default HeroSection;
