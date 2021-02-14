import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/series" className="p-4">
        Menu
      </Link>
      <Link to="/topics" className="p-4">
        Topics
      </Link>
      <Link to="/contact" className="p-4">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
