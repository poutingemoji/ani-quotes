import { useEffect, useState } from "react";
import { randomChoice } from "../utils/Helper";
import Card from "../components/Card";

function getRandomQuotes(quotes) {
  const dailyQuoteTopics = ["", "motivational"];
  const newDailyQuotes = {};
  dailyQuoteTopics.map(
    (key) =>
      (newDailyQuotes[key] = randomChoice(
        key === ""
          ? quotes
          : quotes.filter((quote) => quote.topics.includes(key))
      ))
  );
  return newDailyQuotes;
}

function QuoteOfTheDay({ quotes }) {
  const [date, setDate] = useState(new Date());
  const [dailyQuotes, setDailyQuotes] = useState(getRandomQuotes(quotes));

  useEffect(() => {
    const interval = setInterval(() => {
      setDailyQuotes(getRandomQuotes(quotes));
      setDate(new Date());
    }, calculateSecondsUntilEndOfDate(date) * 1000);
    return () => clearInterval(interval);
  }, []);
  console.log(calculateSecondsUntilEndOfDate(date), quotes);

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center w-full pt-20 lg:w-1/2">
        {Object.keys(dailyQuotes).map((key) => (
          <>
            <h1 className="text-3xl font-semibold text-center text-white capitalize">
              {key.replace(/_/g, " ")} QOTD
            </h1>
            {
              <Card
                image={dailyQuotes[key].image}
                text={dailyQuotes[key].text}
                author={dailyQuotes[key].author}
                tags={dailyQuotes[key].topics}
              />
            }
          </>
        ))}
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
