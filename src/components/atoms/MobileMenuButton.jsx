import React from "react";

const MobileMenuButton = ({ onClick }) => (
  <button
    id="menu-button"
    className="block lg:hidden focus:outline-none"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-800"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>
);

export default MobileMenuButton;
