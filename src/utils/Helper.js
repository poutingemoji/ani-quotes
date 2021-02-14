import quotes from "../data/quotes";
export function getRandomQuote() {
  quotes.sort(function () {
    return 0.5 - Math.random();
  });
  return quotes[Math.floor(Math.random() * quotes.length)]
}
