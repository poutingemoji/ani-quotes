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
      <Link to="/authors" className="p-4">
        Authors
      </Link>
      <Link to="/topics" className="p-4">
        Topics
      </Link>
      <Link to="/quote_of_the_day" className="p-4">
        Quote Of the Day
      </Link>
    </div>
  );
};

export default Dropdown;
