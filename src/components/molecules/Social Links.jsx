import React from "react";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { GrLinkedinOption } from "react-icons/gr";

const SocialLinks = ({ className }) => (
  <div className={`flex flex-wrap gap-2 p-4 bg-white shadow-lg rounded-lg ${className}`}>
    <a href="#" className="w-8 h-8 flex items-center justify-center text-purple-600 rounded-lg">
      <FaFacebookF className="text-xl" />
    </a>
    <a href="#" className="w-8 h-8 flex items-center justify-center text-purple-600 rounded-lg">
      <IoBasketballOutline className="text-xl" />
    </a>
    <a href="#" className="w-8 h-8 flex items-center justify-center text-purple-600 rounded-lg">
      <FaInstagram className="text-xl" />
    </a>
    <a href="#" className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-md">
      <GrLinkedinOption className="text-xl" />
    </a>
    <a href="#" className="w-8 h-8 flex items-center justify-center text-purple-600 rounded-lg">
      <FaBehance className="text-xl" />
    </a>
  </div>
);

export default SocialLinks;
