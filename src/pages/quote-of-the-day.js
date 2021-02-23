import React from "react";
import quotes from "../data/quotes";
import {randomChoice} from "../utils/Helper"
import Card from "../components/Card"

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

class QuoteOfTheDay extends React.Component {
  state = {
    date: new Date(),
    quote: quotes[0],
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date(), quote: randomChoice(quotes) });
    }, calculateSecondsUntilEndOfDate(this.state.date) / 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(calculateSecondsUntilEndOfDate(this.state.date));
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen bg-yellow-300">
          <h1 className="font-black uppercase text-9xl">Quote Of The Day</h1>

          <p>
            {months[this.state.date.getMonth()]}{" "}
            {this.state.date.getDate() + nth(this.state.date.getDate())}
          </p>
        </div>
        <div> {this.state.date.getSeconds()} </div>

        <Card
          image={this.state.quote.author.image}
          title={this.state.quote.author.name}
          content={this.state.quote.text}
        ></Card>
      </>
    );
  }
}

export default QuoteOfTheDay;

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
};
