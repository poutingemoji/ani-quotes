import React from "react";
import quotes from "../data/quotes";

class Hero extends React.Component {
  state = {
    quote: quotes[0],
  };

  generateRandomQuote = () => {
    this.setState({
      quote: quotes[Math.floor(Math.random() * quotes.length)],
    });
    //Shuffling
    quotes.sort(function () {
      return 0.5 - Math.random();
    });
  };

  render() {
    console.log(this.state.quote.socialMedia);
    return (
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 text-center">
          Social Media Quotes
        </h1>
        <button
          className="py-6 px-10 bg-blue-500 rounded-full text-3xl hover:bg-blue-400 active:bg-blue-300 transition duration-300 ease-in-out flex items-center animate-bounce"
          onClick={() => this.generateRandomQuote()}
        >
          Click For A New Quote <i className="ml-2.5 fas fa-random"></i>
        </button>

        <div className="card text-2xl mx-48">
          <p className="card-text">{this.state.quote.text}</p>
          <h5 className="card-title">
            -{" "}
            <img
              className="inline h-7 align-middle rounded-full"
              src={this.state.quote.author.avatarUrl}
            />{" "}
            {this.state.quote.author.username}{" "}
            <i className={`fab fa-${this.state.quote.socialMedia} fa-lg`}></i>
          </h5>
        </div>
      </div>
    );
  }
}

export default Hero;
