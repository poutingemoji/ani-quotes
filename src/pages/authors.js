import React from "react";
import { groupBy } from "../utils/Helper";
const Authors = ({ quotes, isLoading }) => {
  const authors = groupBy(quotes, (quote) => quote.author.name);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-background">
        <h1 className="font-black uppercase text-9xl">Authors Page</h1>
      </div>
      {Object.keys(authors)
        .sort()
        .map((key, i) => {
          console.log("HERE", authors[key]);
          return (
            <div key={i} className="flex text-4xl">
              <img className="mx-4 w-14" src={authors[key][0].author.image} />
              <p>{key}</p>
            </div>
          );
        })}
    </>
  );
};

export default Authors;
