import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="fixed z-50 flex items-center justify-between w-full h-16 shadow-sm text-gray md:justify-evenly bg-primary "
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <img className="h-12" src={logo} alt="logo"/>
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
      <div className="hidden pr-8 font-semibold md:block">
        <Link to="/" className="p-4 hover:text-white">
          Home
        </Link>
        <Link to="/authors" className="p-4 hover:text-white">
          Authors
        </Link>
        <Link to="/topics" className="p-4 hover:text-white">
          Topics
        </Link>
        <Link to="/quote_of_the_day" className="p-4 hover:text-white">
          Quote Of The Day
        </Link>
      </div>
      <div className="hidden md:block"></div>
    </nav>
  );
};

export default Navbar;
