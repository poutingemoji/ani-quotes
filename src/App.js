import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route, useHistory } from "react-router-dom";
import Home from "./pages";
import Topics from "./pages/topics";
import Authors from "./pages/authors";
import QuoteOfTheDay from "./pages/quote_of_the_day";
import Quotes from "./pages/quotes";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import authorQuotes from "./data/authorQuotes";
import {query} from "./utils/Helper"
const url = "https://graphql.anilist.co";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: query,
    variables: {
      id_in: Object.keys(authorQuotes),
      page: 1,
      perPage: 50,
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

  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
    }
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
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        let newQuotes = [];
        console.log(result);
        Object.keys(authorQuotes).map((id) => {
          const character = result.data.Page.characters.find(
            (character) => character.id === parseInt(id)
          );
          if (!character) return;
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
