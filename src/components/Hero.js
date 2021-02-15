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
      <>
        <div className="bg-background h-screen flex flex-col items-center">
            <h1 className="mt-32 text-white lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-bold mb-2 text-center">
              AniQuotes
            </h1>
            <button
              className="text-white bg-green lg:text-xl md:text-xl sm:text-xl text-lg py-2 px-3 my-4 bg-french-blue hover:bg-star-command-blue rounded-md flex items-center"
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
      </>
    );
  }
}

export default Hero;
