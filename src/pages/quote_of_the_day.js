import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { randomChoice } from "../utils/Helper";

function QuoteOfTheDay({ quotes, isLoading }) {
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(randomChoice(quotes));
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setQuote(randomChoice(quotes));
    }, calculateSecondsUntilEndOfDate(date) / 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loading />;
  console.log(calculateSecondsUntilEndOfDate(date));

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen mx-10 bg-background">
        <h1 className="text-5xl">{quote.text}</h1>

        <p>
          {months[date.getMonth()]} {date.getDate() + nth(date.getDate())}
        </p>
      </div>
      <div> {date.getSeconds()} </div>
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

function nth(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
