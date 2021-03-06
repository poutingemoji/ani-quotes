import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        className="fixed z-50 items-center justify-between hidden w-full h-16 shadow-sm lg:flex text-text lg:justify-evenly bg-foreground-transparent"
        role="navigation"
      >
        <Link to="/" className="pl-8">
          <img className="h-12" src={logo} alt="logo" />
        </Link>
        <div className="pr-8 text-lg font-semibold">
          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="p-4 hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/authors"
            exact
            activeClassName="active"
            className="p-4 hover:text-white"
          >
            Authors
          </NavLink>
          <NavLink
            to="/topics"
            exact
            activeClassName="active"
            className="p-4 hover:text-white"
          >
            Topics
          </NavLink>
          <NavLink
            to="/quote_of_the_day"
            exact
            activeClassName="active"
            className="p-4 hover:text-white"
          >
            Quote Of The Day
          </NavLink>
        </div>
        <Link to="/search" className="p-4 hover:text-white">
          <i className="fas fa-search fa-lg"></i>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
