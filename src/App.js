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
import Loading from "./components/Loading";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(async () => {
    let newAuthors = [];
    let page = 1;
    while (true) {
      const res = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: `
            query ($id_in: [Int], $page: Int, $perPage: Int) {
              Page (page: $page, perPage: $perPage) {
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
            page: page,
            perPage: 50,
          },
        }),
      });
      const result = await res.json();
      page++;
      newAuthors = newAuthors.concat(result.data.Page.characters);
      if (!result.data.Page.pageInfo.hasNextPage) break;
    }
    setAuthors(
      newAuthors
        .sort((a, b) => a.name.full.localeCompare(b.name.full))
        .sort((a, b) => authorQuotes[b.id].length - authorQuotes[a.id].length)
    );
  }, []);

  useEffect(() => {
    let newQuotes = [];
    Object.keys(authorQuotes).map((id) => {
      const character = authors.find((author) => author.id === parseInt(id));
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
    console.log(Object.keys(authorQuotes).length, newQuotes, authors);
    setQuotes(newQuotes);
    setIsLoading(false);
  }, [authors]);

  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      hideMenu();
    });

    return unlisten;
  }, [history]);

  const toggle = () => setIsOpen(!isOpen);
  const hideMenu = () => {
    if (window.innerWidth > 768 && isOpen) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  if (isLoading) return <Loading />;
  return (
    <HashRouter basename="/">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />

      <Route
        path="/"
        exact
        component={() => <Home quotes={quotes} authors={authors} />}
      />
      <Route
        path="/authors"
        exact
        component={() => <Authors authors={authors} />}
      />
      <Route
        path="/authors/:authorId"
        component={() => <Quotes quotes={quotes} />}
      />
      <Route
        path="/topics"
        exact
        component={() => <Topics quotes={quotes} />}
      />
      <Route
        path="/topics/:topic"
        component={() => <Quotes quotes={quotes} />}
      />
      <Route
        path="/quote_of_the_day"
        component={() => <QuoteOfTheDay quotes={quotes} />}
      />
      <Footer />
    </HashRouter>
  );
}

export default App;
