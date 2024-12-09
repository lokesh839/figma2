import React from "react";

const FooterSection = () => (
  <footer className="bg-gray-800 py-28 ">
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-purple-700 text-white flex items-center justify-center rounded-full text-lg font-bold">
          B
        </div>
        <span className="text-white font-bold text-lg">Brooklyn</span>
      </div>
      <nav className="mt-4 lg:mt-0">
        <ul className="flex flex-wrap justify-center space-x-6 text-sm text-white">
          <li><a href="#" className="hover:text-purple-600">Home</a></li>
          <li><a href="#" className="hover:text-purple-600">About</a></li>
          <li><a href="#" className="hover:text-purple-600">Services</a></li>
          <li><a href="#" className="hover:text-purple-600">Process</a></li>
          <li><a href="#" className="hover:text-purple-600">Portfolio</a></li>
          <li><a href="#" className="hover:text-purple-600">Blog</a></li>
          <li><a href="#" className="hover:text-purple-600">Contact</a></li>
        </ul>
      </nav>
      <p className="mt-4 lg:mt-0 text-sm text-white">
        &copy; 2023 Picta. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
