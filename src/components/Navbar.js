import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-start items-center h-16 text-white bg-foreground fixed shadow-sm w-full hover:text-gray-900"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <span className="text-white font-black text-4xl">A</span>
        <span className="text-blue-jeans font-black text-4xl">Q</span>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden font-semibold">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/series" className="p-4">
          Series
        </Link>
        <Link to="/topics" className="p-4">
          Topics
        </Link>
        <Link to="/quote_of_the_day" className="p-4">
          Quote Of The Day
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
