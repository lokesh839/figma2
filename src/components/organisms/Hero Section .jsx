import React from "react";
import Button from "../atoms/Button";
import StatisticBox from "../molecules/Statistic Box"
import Image from "../atoms/Image";
import AboutSection from "./About Section";
import WorkProcess from "./Work Process Section";

const HeroSection = () => (
  <div>
    <div class="bg-gradient-to-br from-[rgb(255,240,255)] via-[rgb(255,250,245)] to-[rgb(240,255,255)] ">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-6 py-12 space-y-10 lg:space-y-0 ">
        <div className="text-left sm:w-2/3 md:w-3/4 lg:w-1/2 mt-10 lg:mt-28">
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 ">
            Hello, I'm <br /> Brooklyn Gilbert
          </h1>
          <p className=" text-sm lg:text-md leading-6 text-gray-600 mb-6 ">
            I'm a Freelance{" "}
            <span className="border-b-2 border-red-300 z-10">UI/UX Designer</span> and{" "}
            <span className="border-b-2 border-red-300 z-10">Developer</span> based in London, England.
            I strive to build immersive and beautiful web applications through carefully crafted code
            and user-centric design.
          </p>
          <Button className="bg-purple-700 text-white px-6 py-3 hover:bg-purple-800">
            Say Hello!
          </Button>

          <div className="mt-10 lg:mt-28 flex flex-wrap gap-1">
            <StatisticBox title="Experience" value="15 Y." className="bg-purple-200 px-4 py-3 rounded-sm" />
            <StatisticBox title="Projects Completed" value="250+" className="bg-purple-200 px-4 py-3 rounded-sm" />
            <StatisticBox title="Happy Clients" value="58" className="bg-purple-200 px-4 py-3 rounded-sm" />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:ml-80">
          <img
            src="./images/men.png"
            alt="Profile Image"
            className="rounded-lg w-[200px] sm:w-[300px] md:w-[400px] lg:w-[536px] h-[300px] sm:h-[400px] lg:h-[636px] object-cover"
          />
        </div>

      </section>

      <div className=" relative z-10 -bottom-36">
        <AboutSection />
      </div>
    </div>
    <div className=" relative z-0">
      <WorkProcess />
    </div>
  </div>
);

export default HeroSection;
