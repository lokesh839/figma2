import React from "react";
import ContactInfo from "../molecules/ContactInfo";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { SlLocationPin } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";
import Paragraph from "../atoms/Paragraph";
import { VscSend } from "react-icons/vsc";



const ContactSection = () => (
  <div className="py-16 ">
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 p-8 bg-white text-left">
          <h3 className="text-2xl font-bold mb-4">Let's discuss your Project</h3>
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="space-y-6">
            <div className=" shadow-lg  w-[363px] h-[96px]">
              <div>
                <ContactInfo icon={<SlLocationPin />} title="Address" content="New Mexico 31134" />
              </div>
            </div>
            <ContactInfo icon={<SlLocationPin />} title="My Email" content="mymail@mail.com" />
            <ContactInfo icon={<SlLocationPin />} title="Call Me Now" content="00-1234 00000" />
          </div>
          <div class="flex space-x-4 mt-8 p-4 ">
            <a href="#" class="w-10 h-10 flex items-center justify-center bg-purple-700 text-white rounded-md">
              <i>  <FaFacebookF className=" text-2xl" /></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center  text-purple-500 rounded-lg">
              <i > <IoBasketballOutline className="text-purple-600 text-2xl" /></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center text-purple-500 rounded-lg">
              <i> <FaBehance className="text-purple-600 text-2xl" /></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center  text-purple-500 rounded-lg">
              <i> <FaInstagram className="text-purple-600 text-2xl" /></i>
            </a>
            <a href="#" class="w-10 h-10 flex items-center justify-center  text-purple-500 rounded-lg ">
              <i>  <GrLinkedinOption className=' text-2xl' /></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 p-8 text-left">
          <form action="#" method="POST" className="space-y-6">
            <Paragraph className='mt-10'>
              There are many variations of passages of Lorem Ipsu available,
              but the majority have suffered alte.
            </Paragraph>

            <Input className=" border-purple-700 placeholder:text-purple-600 " placeholder="Name*" />

            <Input placeholder="Email*" />
            <Input placeholder="Location" />
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Budget*" />
              <Input placeholder="Subject*" />
            </div>
            <Input placeholder="Message*" />
            <Button className="bg-purple-600 text-white flex items-center space-x-2">
              <span>Submit</span>
              <i><VscSend /></i>
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
