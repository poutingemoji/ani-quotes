import React, { useState } from "react";
import { randomChoice } from "../utils/Helper";
import Card from "./Card";

function Hero({ quotes }) {
  const [quote, setQuote] = useState(randomChoice(quotes));
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-background">
        <h1 className="mt-32 mb-2 text-4xl font-bold text-center text-white lg:text-7xl md:text-5xl sm:text-4xl">
          <span className="text-white">Ani</span>
          <span className="text-blue">Quotes</span>
        </h1>

        <button
          className="flex items-center px-3 py-2 my-4 text-lg text-white rounded-md bg-green lg:text-xl md:text-xl sm:text-xl bg-french-blue hover:bg-star-command-blue"
          onClick={() => setQuote(randomChoice(quotes))}
        >
          Randomize the Quote <i className="ml-2.5 fas fa-random"></i>
        </button>

        <Card
          image={quote.author.image}
          title={quote.author.name}
          content={quote.text}
        ></Card>
      </div>
    </>
  );
}

export default Hero;
