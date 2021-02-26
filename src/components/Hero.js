import { useState } from "react";
import { randomChoice } from "../utils/Helper";

function Hero({ quotes }) {
  const [quote, setQuote] = useState(randomChoice(quotes));
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-secondary">
        <h1 className="mt-32 mb-2 text-4xl font-bold text-center text-white lg:text-7xl md:text-5xl sm:text-4xl">
          <span className="text-white">Ani</span>
          <span className="text-blue">Quotes</span>
        </h1>

        <button
          className="z-50 flex items-center px-3 py-2 my-4 text-lg text-white rounded-md bg-green lg:text-xl md:text-xl sm:text-xl bg-french-blue hover:bg-star-command-blue"
          onClick={() => setQuote(randomChoice(quotes))}
        >
          Randomize the Quote <i className="ml-2.5 fas fa-random"></i>
        </button>
      </div>
      <span className="absolute w-3/6 text-xl top-1/2 left-1/4 lg:text-2xl">"{quote.text}"</span>
    </>
  );
}

export default Hero;
