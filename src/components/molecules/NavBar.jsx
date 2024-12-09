import React, { useState } from "react";
import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";
import Button from "../atoms/Button";
import MobileMenuButton from "../atoms/MobileMenuButton";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full shadow">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Logo />
        <MobileMenuButton onClick={() => setMenuOpen(!menuOpen)} />
        <ul
          id="menu-items"
          className={`hidden lg:flex space-x-9 text-gray-700 lg:items-center ${
            menuOpen ? "block" : ""
          }`}
        >
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Process</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Services</NavLink>
          <Button className=' bg-purple-600  text-white rounded-md'>Contact</Button>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden">
          <ul className="flex flex-col space-y-4 py-4 px-6 bg-gray-100">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Process</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Services</NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
