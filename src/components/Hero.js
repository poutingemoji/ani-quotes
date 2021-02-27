import { useState } from "react";
import { randomChoice } from "../utils/Helper";
import ReactPlayer from "react-player/youtube";
function Hero({ quotes }) {
  const [quote, setQuote] = useState(randomChoice(quotes));
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-x-hidden bg-secondary">
        <iframe
          className="absolute h-screen overflow-x-hidden"
          src="https://www.youtube.com/embed/z9Ug-3qhrwY?controls=0&autoplay=1&loop=1&mute=1"
          allowfullscreen
        />
        <div
          style={{
            background: "linear-gradient(rgba(11, 22, 34, 0.7), rgb(11,22,34))",
          }}
          className="z-30 flex items-center justify-center w-full h-full bg-black "
        >
          <h1 className="z-40 my-10 text-4xl font-bold text-center text-white lg:text-7xl md:text-5xl sm:text-4xl">
            <span className="text-white">Nice</span>
            <span className="text-blue">Try</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Hero;
