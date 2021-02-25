import React from "react";
import { groupBy } from "../utils/Helper";
import Loading from "../components/Loading"
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Authors = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  const authors = groupBy(quotes, (quote) => quote.author.name);
  return (
    <>
      <div className="pt-20 mx-32">
        <h1 className="text-3xl font-black uppercase">Authors</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {Object.keys(authors)
          .sort()
          .map((key, i) => {
            console.log("HERE", authors[key]);
            const author = authors[key][0].author;
            return (
              <button key={i} className="flex text-4xl">
                <Tippy content={author.name}>
                  <img className="m-4 rounded-lg w-60" src={author.image} />
                </Tippy>
                {/*<p>{key}</p> */}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default Authors;
