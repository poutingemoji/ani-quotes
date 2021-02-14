import React from "react";
import quotes from "../data/quotes";
import { getRandomQuote } from "../utils/Helper";
import Card from "../components/Card";
class Hero extends React.Component {
  state = {
    quote: quotes[0],
  };

  render() {
    return (
      <div className="bg-background text-pale-silver h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-bold mb-2 text-center">
          AniQuotes
        </h1>
        <button
          className="text-pale-silver lg:text-4xl md:text-2xl sm:text-2xl text-lg py-6 px-10 bg-french-blue hover:bg-star-command-blue rounded-md flex items-center"
          onClick={() => this.setState({ quote: getRandomQuote() })}
        >
          Randomize the Quote <i className="ml-2.5 fas fa-random"></i>
        </button>
        <Card
          image={this.state.quote.author.image}
          title={this.state.quote.author.name}
          content={this.state.quote.text}
        ></Card>
      </div>
    );
  }
}

export default Hero;
