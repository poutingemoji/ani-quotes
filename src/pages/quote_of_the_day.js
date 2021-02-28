import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { randomChoice } from "../utils/Helper";

function QuoteOfTheDay({ quotes, isLoading }) {
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(randomChoice(quotes));
  const [motivationQuote, setMotivationQuote] = useState(
    randomChoice(
      quotes.filter((quote) => quote.topics.includes("Motivational"))
    )
  );
  useEffect(() => {
    const element = document.getElementById("footer");
    element.classList.add("hidden");
    const interval = setInterval(() => {
      setDate(new Date());
      setQuote(randomChoice(quotes));
      setMotivationQuote(
        randomChoice(
          quotes.filter((quote) => quote.topics.includes("Motivational"))
        )
      );
    }, calculateSecondsUntilEndOfDate(date) * 1000);
    return () => {
      element.classList.remove("hidden");
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loading />;
  console.log(calculateSecondsUntilEndOfDate(date));

  return (
    <div
      className="h-screen overflow-y-scroll scroll-snap-wrapper"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="absolute w-screen pt-20 ">
        <h1 className="text-4xl font-bold text-center ">
          📅 {`${months[date.getMonth()]} ${date.getDate()}`}
        </h1>
      </div>

      <div
        className="flex flex-col items-center justify-center h-screen bg-primary"
        style={{ scrollSnapAlign: "start" }}
      >
        <p>{quote.text}</p>
      </div>
      <div
        className="flex flex-col items-center justify-center h-screen bg-secondary"
        style={{ scrollSnapAlign: "start" }}
      >
        <p>{motivationQuote.text}</p>
      </div>
    </div>
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
