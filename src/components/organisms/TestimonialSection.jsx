import React from "react";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import TestimonialCard from "../molecules/TestimonialCard";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import HappyClientsSection from "./HappyClientsSection";

const TestimonialSection = () => (
  <div class="bg-gradient-to-b from-[rgb(255,250,245)] via-[rgb(255,255,255)] to-[rgb(245,245,255)] h-[1650px] py-16">
    <div>
      <HappyClientsSection />
    </div>
    <div className="max-w-3xl mx-auto text-center">
      <Heading className="text-3xl">Testimonial</Heading>
      <Paragraph className="mt-8">
        There are many variations of passages of Lorem Ipsum available,<br /> but the
        majority have suffered alteration.
      </Paragraph>
      <div className=" mt-5">
        <TestimonialCard
          quote="“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
Morbi ornare elit at libero suscipit porta.”"
          author="Esther Howard"
          position="Managing Director, ABC Company"
        />
      </div>
    </div>
    <div className="relative z-10 -bottom-32">
      <ContactSection />
    </div>
    <div className=" ">
      <FooterSection />
    </div>
  </div>
);

export default TestimonialSection;
