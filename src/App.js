import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages";
import Topics from "./pages/topics";
import Authors from "./pages/authors";
import QuoteOfTheDay from "./pages/quote-of-the-day";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import authors from "./data/authors";

const url = "https://graphql.anilist.co",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        query ($id_in: [Int]) {
          Page (page: 1) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            characters (id_in: $id_in) {
              id
              image {
                large
              }
              name {
                full
              }
            }
          }
        }
      `,
      variables: {
        id_in: Object.keys(authors),
      },
    }),
  };

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //const [authors, setAuthors] = useState(authors);
  const [quotes, setQuotes] = useState([]);

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
    window.removeEventListener("resize", hideMenu);

    const quotes = [];
    Object.entries(authors).forEach(([key, value]) => {
      for (let i = 0; i < value.length; i++) {
        const quote = value[i];
        quote.author = { id: parseInt(key) };
        quotes.push(quote);
      }
    });
    fetch(url, options)
      .then((res) => res.json())
      .then(
        (result) => {
          for (let i = 0; i < quotes.length; i++) {
            const quote = quotes[i];
            const character = result.data.Page.characters.find(
              (character) => character.id === quote.author.id);
            if (!character) continue;
            quote.author.name = character.name.full;
            quote.author.image = character.image.large;
          }
          setIsLoaded(true);
          setQuotes(quotes);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    
  }, []);

  return (
    <HashRouter basename="/">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Route path="/" exact component={() => <Home quotes={quotes}/>} />
      <Route path="/authors" component={Authors} />
      <Route path="/topics" component={Topics} />
      <Route path="/quote_of_the_day" component={QuoteOfTheDay} />
      <Footer />
    </HashRouter>
  );
}

export default App;
