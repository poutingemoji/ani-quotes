import React from "react";
import { groupBy } from "../utils/Helper";
const Topics = ({ quotes, isLoading }) => {
  const topics = groupBy(quotes, (quote) => quote.topics);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-background">
        <h1 className="font-black uppercase text-9xl">Topics Page</h1>
      </div>
      {Object.keys(topics).map((key) => (
        <div className="text-5xl">
          {key}
          <div>
            {topics[key].map((quote) => (
              <>
                <div className="py-4 text-2xl">
                  "{quote.text}" - {quote.author.name}
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Topics;
