import React from "react";

const NavLink = ({ href, children, className }) => (
  <li>
    <a href={href || "#"} className={`hover:text-purple-700 ${className}`}>
      {children}
    </a>
  </li>
);

export default NavLink;
