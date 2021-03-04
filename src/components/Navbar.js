import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import Dropdown from "../components/Dropdown";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) setIsOpen(false);
  };

  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      hideMenu();
    });
    return unlisten;
  }, [history]);

  useEffect(() => {
    window.addEventListener("resize", hideMenu);
    return () => window.removeEventListener("resize", hideMenu);
  }, []);

  return (
    <>
      <nav
        className="fixed z-50 flex items-center justify-between w-full h-16 shadow-sm text-gray md:justify-evenly bg-primary-light"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          <img className="h-12" src={logo} alt="logo" />
        </Link>
        <div
          className="order-last px-4 cursor-pointer md:hidden md:order-2"
          onClick={toggle}
        >
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
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="p-4 hover:text-gray-light"
          >
            Home
          </NavLink>
          <NavLink
            to="/authors"
            exact
            activeClassName="active"
            className="p-4 hover:text-gray-light"
          >
            Authors
          </NavLink>
          <NavLink
            to="/topics"
            exact
            activeClassName="active"
            className="p-4 hover:text-gray-light"
          >
            Topics
          </NavLink>
          <NavLink
            to="/quote_of_the_day"
            exact
            activeClassName="active"
            className="p-4 hover:text-gray-light"
          >
            Quote Of The Day
          </NavLink>
        </div>
        <Link to="/search" className="p-4 hover:text-gray-light">
          <i className="fas fa-search fa-lg"></i>
        </Link>
      </nav>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Navbar;
