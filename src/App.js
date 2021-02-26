import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages";
import Topics from "./pages/topics";
import Authors from "./pages/authors";
import QuoteOfTheDay from "./pages/quote_of_the_day";
import Quotes from "./pages/quotes";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import authorQuotes from "./data/authorQuotes";

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
        id_in: Object.keys(authorQuotes),
      },
    }),
  };

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        let newQuotes = [];
        Object.keys(authorQuotes).map((id) => {
          const character = result.data.Page.characters.find(
            (character) => character.id === parseInt(id)
          );
          authorQuotes[id].map((newQuote) =>
            newQuotes.push(
              Object.assign(newQuote, {
                author: {
                  id,
                  image: character?.image.large,
                  name: character?.name.full,
                },
              })
            )
          );
        });
        setQuotes(newQuotes);
        setIsLoading(false);
      });

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
  }, []);

  return (
    <HashRouter basename="/">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Route
        path="/"
        exact
        component={() => <Home quotes={quotes} isLoading={isLoading} />}
      />
      <Route
        path="/authors"
        exact
        component={() => <Authors quotes={quotes} isLoading={isLoading} />}
      />
      <Route
        path="/authors/:authorId"
        component={() => <Quotes quotes={quotes} isLoading={isLoading} />}
      />
      <Route
        path="/topics"
        exact
        component={() => <Topics quotes={quotes} isLoading={isLoading} />}
      />
      <Route
        path="/topics/:topic"
        component={() => <Quotes quotes={quotes} isLoading={isLoading} />}
      />
      <Route
        path="/quote_of_the_day"
        component={() => (
          <QuoteOfTheDay quotes={quotes} isLoading={isLoading} />
        )}
      />
      <Footer />
    </HashRouter>
  );
}

export default App;

