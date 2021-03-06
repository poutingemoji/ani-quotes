import { useEffect, useState } from "react";
import { randomChoice } from "../utils/Helper";
import Card from "../components/Card";

function getDailyQuotes(quotes, percentageOfYear) {
  const dailyQuoteTopics = ["", "motivational"];
  const newDailyQuotes = {};

  dailyQuoteTopics.map((key) => {
    const array =
      key === ""
        ? quotes
        : quotes.filter((quote) => quote.topics.includes(key));
    newDailyQuotes[key] = array[Math.floor(percentageOfYear * array.length)];
  });
  return newDailyQuotes;
}

function QuoteOfTheDay({ quotes }) {
  const [date, setDate] = useState(new Date());
  const now = date;
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  const percentageOfYear = day / 365;
  const [dailyQuotes, setDailyQuotes] = useState(
    getDailyQuotes(quotes, percentageOfYear)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDailyQuotes(getDailyQuotes(quotes, percentageOfYear));
      setDate(new Date());
    }, calculateSecondsUntilEndOfDate(date) * 1000);
    return () => clearInterval(interval);
  }, []);
  console.log(calculateSecondsUntilEndOfDate(date), quotes);

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center w-full text-3xl font-semibold text-center text-white lg:pt-20 lg:w-1/2">
        {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
        {percentageOfYear < 1 ? (
          Object.keys(dailyQuotes).map((key) => (
            <>
              <h1 className="capitalize">{key.replace(/_/g, " ")}</h1>
              {
                <Card
                  image={dailyQuotes[key].image}
                  text={dailyQuotes[key].text}
                  author={dailyQuotes[key].author}
                  tags={dailyQuotes[key].topics}
                />
              }
            </>
          ))
        ) : (
          <span className="text-lg font-normal text-text">
            🧨 Finish the year with a bang!
          </span>
        )}
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
