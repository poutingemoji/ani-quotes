import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { randomChoice } from "../utils/Helper";
import Swiper from "swiper";

function QuoteOfTheDay({ quotes, isLoading }) {
  const [date, setDate] = useState(new Date());
  const [quote, setQuote] = useState(randomChoice(quotes));
  const [motivationQuote, setMotivationQuote] = useState(
    randomChoice(
      quotes.filter((quote) => quote.topics.includes("Motivational"))
    )
  );
  useEffect(() => {
    /*
    const element = document.getElementById("footer");
    element.classList.add("hidden");*/
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
      //element.classList.remove("hidden");
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Loading />;
  console.log(calculateSecondsUntilEndOfDate(date));

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        ...
      </div>

      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default QuoteOfTheDay;

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
/*
const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  mousewheelControl: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});*/

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
