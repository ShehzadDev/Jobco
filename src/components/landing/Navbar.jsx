import React from "react";
import Logo from "./Logo";

const Links = () => {
  return (
    <ul className="hidden md:flex space-x-6">
      {/* <li>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          About
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Contact
        </a>
      </li> */}
    </ul>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-5">
        <Logo />
        <Links />
      </nav>
    </div>
  );
};

export default Navbar;
