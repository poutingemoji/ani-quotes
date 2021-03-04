import Hero from "../components/Hero";
import Masonry from "../components/Masonry";
import Loading from "../components/Loading";
import CountUp from "react-countup";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, memo } from "react";
import { groupBy } from "../utils/Helper";
import ninoConfrontation from "../images/nino-confrontation.jpg";
import roxyEmbarrassment from "../images/roxy-embarrassment.jpg";
import sengokuConfession from "../images/sengoku-confession.jpg";
import ReadMore from "react-read-more-read-less";

function Home({ quotes, authors }) {
  const quotesCopy = JSON.parse(JSON.stringify(quotes));
  const [curQuotes, setCurQuotes] = useState(quotes.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  function fetchMoreData() {
    if (curQuotes.length >= quotes.length) {
      setHasMore(false);
      return;
    }
    let twentyMoreQuotes = [];
    for (let i = 0; i < 20; i++) {
      const idx = Math.floor(Math.random() * quotesCopy.length);
      twentyMoreQuotes.push(quotesCopy.splice(idx, 1)[0]);
    }
    setCurQuotes(curQuotes.concat(twentyMoreQuotes));
  }

  const theNumbersData = {
    "Total Quotes": quotes,
    "Total Authors": authors,
    Topics: Object.keys(groupBy(quotes, (quote) => quote.topics)),
  };

  return (
    <>
      <Hero />
      <div className="mt-24 md:my-44 md:mx-10">
        <div className="flex flex-col items-center justify-center h-screen lg:flex-row md:h-screen/2">
          <div className="lg:mr-10 lg:w-1/2 xl:w-2/5">
            <img
              className="md:rounded-xl"
              src={roxyEmbarrassment}
              alt="nino-confrontation"
            />
          </div>

          <div className="p-5 md:p-0 lg:w-1/2 xl:w-2/5">
            <h1 className="py-4 text-5xl font-bold text-white">
              What is AniQuotes?
            </h1>
            <p className="text-lg">
              AniQuotes is a collection of quotes by anime characters. The
              primary focus of AniQuotes is to allow anime quotes to be more
              accessible and to bring attention to all the beautiful quotes that
              can be found in anime and manga. The idea for AniQuotes came about
              from my friend introducing me to AniList, a website that tracks
              your anime and manga progress, and BrainyQuote, a quotation site I
              used to visit for my essays. This is the first multi-page website
              I've built with Create React App and Tailwind CSS and I hope you
              find a quote you can resonate with :)
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen lg:flex-row md:h-screen/2">
          <div className="p-5 md:p-0 lg:w-1/2 xl:w-2/5">
            <h1 className="py-4 text-5xl font-bold text-white ">
              Who is poutingemoji?
            </h1>

            <p className="text-lg">
              <ReadMore
                charLimit={700}
                readMoreText={"see more"}
                readLessText={"see less"}
                readMoreClassName="read-more"
                readLessClassName="read-less"
              >
                😎🤡 I think that says enough about me. Anyways... I really
                enjoy making Discord Bots and websites but it hasn't always been
                this way. I started scripting around the beginning of April last
                year because my long time ROBLOX and Discord friend was willing
                to teach me the basics of RLua. After I got a grasp of RLua, I
                began making a fighting and simulator game and helped new
                developers in Roblox Studio Community on the side. This went on
                for many months. Eventually I realized I didn't like making
                games as much as I thought because I invested a great deal of
                time into developing and saw little to no return in terms of
                progress or improvement in my scripting ability. Around the
                middle of June, I had a strong urge to make Discord Bots so
                that's what I set out to do. This was also when my friend,
                nekoama, showed me the website he made in Web Design class.
                (Will be important later!) I began learning discord.js (Yes, I
                learned a library while learning the language 🤷‍♂️) and created
                poutingbot. I felt like making Discord Bots was the right choice
                for me because I could immediately show what I made to my
                friends and they could interact with it easily. In late July, I
                created my first website to show off poutingbot's features and
                commands with HTML, CSS, JS and Bulma. It was a miracle that
                website even worked (It doesn't anymore 😢) but besides that
                point, I really liked making websites because once I published
                it to GitHub Pages, anyone could see it and I really loved that
                (Also partly because I didn't need to host a server if I just
                made static websites 😗). Things went downhill from there. I
                began making an RPG game with poutingbot and spent many months
                creating and removing features and didn't even bother to create
                a design for the game beforehand (Pretty embarrassing since I've
                had experience with making games before) all while still helping
                out in Roblox Studio Community. So there goes 7 months... At the
                start of February 2021, nekoama showed me another one of his Web
                Design assignments, a showcase of his favorite anime, manga, and
                characters, and it made me realize why I loved making websites
                so much. So, after a bit of trial and error, I picked up React
                and Tailwind CSS and made a timeline of the most memorable songs
                from each period in my life and showcased my favorite songs and
                artists. And here we are, almost a year later!
              </ReadMore>
            </p>
            <p className="mt-1 text-sm uppercase">Written March 2, 2021</p>
          </div>
          <div className="lg:ml-10 lg:w-1/2 xl:w-2/5">
            <img
              className="md:rounded-xl"
              src={ninoConfrontation}
              alt="roxy-embarrassment"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-screen lg:flex-row md:flex-col md:h-screen/2">
          <div className="lg:w-1/2 lg:m-10 2xl:w-1/3">
            <img
              className="hidden md:block rounded-xl"
              src={sengokuConfession}
              alt="sengoku-confession"
            />
          </div>

          <div className="flex flex-col my-10 text-6xl font-bold text-center text-white md:text-6xl">
            <h1 className="text-5xl md:text-5xl">The Numbers</h1>
            <hr className="mt-5"></hr>
            {Object.keys(theNumbersData).map((key, i) => (
              <div key={i} className="my-3">
                <CountUp end={theNumbersData[key].length} duration={5} />
                <p className="text-lg font-medium uppercase text-gray">{key}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="py-1 text-3xl font-bold text-center uppercase md:text-4xl">
        📖 Once Upon a Time
      </h3>
      <InfiniteScroll
        dataLength={curQuotes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
        scrollThreshold={"100%"}
        endMessage={
          <h3 className="py-1 text-3xl font-bold text-center uppercase md:text-4xl">
            The End 📕
          </h3>
        }
      >
        <Masonry>
          {curQuotes.map((quote, i) => (
            <Card
              key={i}
              image={quote.image}
              text={quote.text}
              author={quote.author}
              tags={quote.topics}
            />
          ))}
        </Masonry>
      </InfiniteScroll>
    </>
  );
}

export default Home;

/*
function getRandom(arr, n) {
  const result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const shuffle = (arr) =>
  [...arr].reduceRight(
    (res, _, __, s) => (
      res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
    ),
    []
  );

*/
