import Card from "../components/Card";
import topics from "../data/topics";
import { useState } from "react";

function Search({ quotes, authors }) {
  const [query, updateQuery] = useState("");
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  /*
      const authorFuseResults = new Fuse(authors, {
    keys: ["name.full"],
  })
    .map((character) => character.item)
    .search(query);
  const topicFuseResults = new Fuse(Object.keys(topics))
    .map((character) => character.item)
    .search(query);
    */

  return (
    <div className="pt-20">
      <input
        className="h-10 text-black w-96"
        type="search"
        value={query}
        onChange={onSearch}
      />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col w-1/3">
          {query.length > 0 &&
            quotes
              .filter((quote) =>
                quote.text.toLowerCase().includes(query.toLowerCase())
              )
              .map((quote) => (
                <Card
                  author={quote.author}
                  text={quote.text}
                  image={quote.image}
                  tags={quote.topics}
                />
              ))}
        </div>
        <div className="flex flex-col w-1/3">
          {query.length > 0 &&
            authors
              .filter((author) =>
                author.name.full.toLowerCase().includes(query.toLowerCase())
              )
              .map((author) => (
                <Card author={author} image={author.image.large} />
              ))}
        </div>
        <div className="flex flex-col w-1/3">
          {query.length > 0 &&
            Object.keys(topics)
              .filter((topicName) =>
                topicName.replace(/_/g, " ").includes(query.toLowerCase())
              )
              .map((topicName) => (
                <Card
                  image={topics[topicName].image}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
//fixed z-50 w-screen h-screen
