import React from "react";
import { groupBy } from "../utils/Helper";
const Authors = ({ quotes, isLoading }) => {
  const authors = groupBy(quotes, (quote) => quote.author.name);
  console.log(authors);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-red-400">
        <h1 className="font-black uppercase text-9xl">Authors Page</h1>
      </div>
      {Object.keys(authors).map((key) => {
        return <div className="text-5xl">{key}</div>;
      })}
    </>
  );
};

export default Authors;
