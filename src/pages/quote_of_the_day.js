import { useEffect, useState } from "react";
import { randomChoice } from "../utils/Helper";
import Swiper from "swiper";

function QuoteOfTheDay({ quotes }) {
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(randomChoice(quotes));
  const [motivationQuote, setMotivationQuote] = useState(
    randomChoice(
      quotes.filter((quote) => quote.topics.includes("motivational"))
    )
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setQuote(randomChoice(quotes));
      setMotivationQuote(
        randomChoice(
          quotes.filter((quote) => quote.topics.includes("motivational"))
        )
      );
    }, calculateSecondsUntilEndOfDate(date) * 1000);
    return () => {
      //element.classList.remove("hidden");
      clearInterval(interval);
    };
  }, []);
  console.log(calculateSecondsUntilEndOfDate(date));

  return (
    <>
    
    </>
  );
}

export default QuoteOfTheDay;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function calculateSecondsUntilEndOfDate(date) {
  return (
    24 * 60 * 60 -
    date.getHours() * 60 * 60 -
    date.getMinutes() * 60 -
    date.getSeconds()
  );
}

/*      <div
        className="swiper-wrapper"
        //style={{ scrollSnapType: "y mandatory" }}
      >
           <div className="absolute w-screen pt-20 ">
          <h1 className="text-4xl font-bold text-center ">
            📅 {`${months[date.getMonth()]} ${date.getDate()}`}
          </h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-screen bg-primary swiper-slide"
          //style={{ scrollSnapAlign: "start" }}
        >
          <p>{quote.text}</p>
        </div>
        <div
          className="flex flex-col items-center justify-center h-screen bg-secondary swiper-slide"
          //style={{ scrollSnapAlign: "start" }}
        >
          <p>{motivationQuote.text}</p>
        </div>
      </div> */
