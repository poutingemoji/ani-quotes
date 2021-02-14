import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages";
import Topics from "./pages/topics";
import Series from "./pages/series";
import QuoteOfTheDay from "./pages/quote-of-the-day";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <HashRouter basename="/">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Route path="/" exact component={Home} />
      <Route path="/series" component={Series} />
      <Route path="/topics" component={Topics} />
      <Route path="/quote_of_the_day" component={QuoteOfTheDay} />
      <Footer />
    </HashRouter>
  );
}

export default App;
