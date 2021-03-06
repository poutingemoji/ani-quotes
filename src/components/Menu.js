import { Link } from "react-router-dom";

const Menu = ({ isOpen, toggle }) => {
  return (
    <div
      className={`p-5 gap-5 text-xs grid grid-cols-3 mb-4 mr-4 bottom-0 right-0 rounded-lg bg-foreground-light z-40 fixed ${
        isOpen ? "" : "hidden"
      }`}
    >
      <Link to="/" className="flex flex-col items-center hover:text-blue">
        <i class="fas fa-home text-2xl"></i>
        <span>home</span>
      </Link>
      <Link
        to="/authors"
        className="flex flex-col items-center hover:text-blue"
      >
        <i class="fas fa-pen text-2xl"></i>
        <span>authors</span>
      </Link>
      <Link to="/topics" className="flex flex-col items-center hover:text-blue">
        <i class="fas fa-theater-masks text-2xl"></i>
        <span>topics</span>
      </Link>
      <Link
        to="/quote_of_the_day"
        className="flex flex-col items-center hover:text-blue"
      >
        <i class="fas fa-calendar-day text-2xl"></i>
        <span>qotd</span>
      </Link>
      <Link to="/search" className="flex flex-col items-center hover:text-blue">
        <i class="fas fa-search text-2xl"></i>
        <span>search</span>
      </Link>
      <div
        onClick={toggle}
        className="flex items-center justify-center cursor-pointer"
      >
        <i class="fas fa-times text-2xl"></i>
      </div>
    </div>
  );
};

export default Menu;
