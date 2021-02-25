import { useState } from "react";
import { randomChoice } from "../utils/Helper";

function Hero({ quotes }) {
  const [quote, setQuote] = useState(randomChoice(quotes));
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-background">
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

        <span className="w-3/6 text-lg">"{quote.text}"</span>
      </div>
    </>
  );
}

export default Hero;
