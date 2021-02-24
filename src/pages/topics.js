import React from "react";
import { groupBy } from "../utils/Helper";
const Topics = ({ quotes, isLoading }) => {
  const topics = groupBy(quotes, (quote) => quote.topics);
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-background">
        <h1 className="font-black uppercase text-9xl">Topics Page</h1>
      </div>
      <div className="mx-32">
        {Object.keys(topics)
          .sort()
          .map((key) => (
            <div>
              <span className="text-5xl font-black">{key}</span>
              <div>
                {topics[key].map((quote) => (
                  <>
                    <div className="py-4 text-2xl font-normal">
                      "{quote.text}" - {quote.author.name}
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Topics;
