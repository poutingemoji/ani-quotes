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
import Loading from "./components/Loading";
import Search from "./pages/search";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(async () => {
    let newAuthors = [];
    let media = [];
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
                  media {
                    nodes {
                      id
                    } 
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

    page = 1;
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
                media(id_in: $id_in) {
                  id
                  title {
                    english
                  }
                  bannerImage
                }
              }
            }
          `,
          variables: {
            id_in: newAuthors.map((author) => author.media.nodes[0].id),
            page: page,
            perPage: 50,
          },
        }),
      });
      const result = await res.json();
      page++;
      media = media.concat(result.data.Page.media);
      if (!result.data.Page.pageInfo.hasNextPage) break;
    }

    setAuthors(
      newAuthors
        .map((author) => ({
          ...author,
          media: media.find((media) => media.id === author.media.nodes[0].id),
        }))
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
        newQuotes.push({ ...newQuote, author: character })
      );
    });
    console.log(Object.keys(authorQuotes).length, newQuotes, authors);
    setQuotes(newQuotes);
    setIsLoading(false);
  }, [authors]);

  if (isLoading) return <Loading />;
  return (
    <HashRouter basename="/">
      <Navbar />
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
        component={() => <Quotes quotes={quotes} authors={authors} />}
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
      <Route
        path="/search"
        component={() => <Search quotes={quotes} authors={authors} />}
      />
      <Footer />
    </HashRouter>
  );
}

export default App;
