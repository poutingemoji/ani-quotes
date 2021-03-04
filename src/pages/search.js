import Card from "../components/Card";
import topics from "../data/topics";
import { useState } from "react";
import ImageButton from "../components/ImageButton";
import { Link } from "react-router-dom";
import authorQuotes from "../data/authorQuotes";
import { groupBy } from "../utils/Helper";

function Search({ quotes, authors }) {
  const [query, updateQuery] = useState("");
  function handleKeyDown({ key, currentTarget }) {
    if (!(key === "Enter")) return;
    updateQuery(currentTarget.value);
  }
  const topicQuotes = groupBy(quotes, (quote) => quote.topics);
  const quoteResults = quotes.filter((quote) =>
    quote.text.toLowerCase().includes(query.toLowerCase())
  );
  const authorResults = authors.filter((author) =>
    author.name.full.toLowerCase().includes(query.toLowerCase())
  );
  const topicResults = Object.keys(topics).filter((key) =>
    key.replace(/_/g, " ").includes(query.toLowerCase())
  );
  console.log(topicResults);
  return (
    <div className="pt-20">
      <input
        className="h-10 text-black w-96"
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-row justify-center">
        {query.length > 0 && (
          <>
            <div className="flex flex-col w-1/3">
              {quoteResults.length > 0 &&
                quoteResults
                  .slice(0, 10)
                  .map((quote, i) => (
                    <Card
                      key={i}
                      author={quote.author}
                      text={quote.text}
                      image={quote.image}
                      tags={quote.topics}
                    />
                  ))}
            </div>
            <div className="flex flex-col w-1/6">
              {authorResults.length > 0 &&
                authorResults.slice(0, 10).map((author, i) => (
                  <Link to={`/authors/${author.id}`} key={i}>
                    <ImageButton
                      className={"h-96"}
                      title={author.name.full}
                      numOfQuotes={authorQuotes[author.id].length}
                      image={author.image.large}
                    />
                  </Link>
                ))}
            </div>
            <div className="flex flex-col w-1/6">
              {topicResults.length > 0 &&
                topicResults.slice(0, 10).map((key, i) => (
                  <Link to={`/topics/${key}`} key={i}>
                    <ImageButton
                      className={"h-80"}
                      icon={topics[key]?.icon}
                      title={key}
                      numOfQuotes={1}
                      image={topics[key]?.image}
                    />
                  </Link>
                ))}
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
//fixed z-50 w-screen h-screen
