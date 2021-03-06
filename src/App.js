import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Route, useHistory } from "react-router-dom";
import Home from "./pages";
import Topics from "./pages/topics";
import Authors from "./pages/authors";
import QuoteOfTheDay from "./pages/quote_of_the_day";
import Quotes from "./pages/quotes";
import Footer from "./components/Footer";
import authorQuotes from "./data/authorQuotes";
import Loading from "./components/Loading";
import Search from "./pages/search";
import Hamburger from "./components/Hamburger";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return unlisten;
  }, [history]);

  useEffect(() => {
    fetchCharacters().then((authors) =>
      fetchMedia(authors)
        .then((media) =>
          setAuthors(
            authors
              .map((author) => ({
                ...author,
                media: media.find(
                  (media) => media.id === author.media.nodes[0].id
                ),
              }))
              .sort((a, b) => a.name.full.localeCompare(b.name.full))
              .sort(
                (a, b) => authorQuotes[b.id].length - authorQuotes[a.id].length
              )
          )
        )
        .then(() => {
          let newQuotes = [];
          Object.keys(authorQuotes).map((id) => {
            const character = authors.find(
              (author) => author.id === parseInt(id)
            );
            if (!character) return false;
            return authorQuotes[id].map((newQuote) =>
              newQuotes.push({ ...newQuote, author: character })
            );
          });
          console.log(Object.keys(authorQuotes).length, newQuotes, authors);
          setQuotes(newQuotes);
        })
        .finally(() => setIsLoading(false))
    );
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center h-screen">
        <Loading />
      </div>
    );

  return (
    <HashRouter basename="/">
      <Navbar />
      <Hamburger />
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
      <Route path="/search" component={() => <Search quotes={quotes} />} />
      <Footer />
    </HashRouter>
  );
}

export default App;

async function fetchCharacters() {
  let page = 1;
  let newAuthors = [];
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
                        hasNextPage
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
  return newAuthors;
}

async function fetchMedia(authors) {
  let page = 1;
  let media = [];
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
                  hasNextPage
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
          id_in: authors.map((author) => author.media.nodes[0].id),
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
  return media;
}
