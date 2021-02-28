import Hero from "../components/Hero";
import Masonry from "../components/Masonry";
import Loading from "../components/Loading";
import CountUp from "react-countup";
import authorQuotes from "../data/authorQuotes";
import FadeInWrapper from "../components/FadeInWrapper";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { groupBy } from "../utils/Helper";
import lightYagami from "../images/characters/light-yagami.png";

function Home({ quotes, isLoading }) {
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

  if (isLoading) return <Loading />;
  const theNumbersData = {
    "Total Quotes": Object.values(authorQuotes).flat(),
    "Total Authors": Object.keys(authorQuotes),
    Topics: Object.keys(groupBy(quotes, (quote) => quote.topics)),
  };

  return (
    <>
      <Hero quotes={quotes} />
      <div className="flex pt-44 justify-evenly">
        <img
          className="hidden md:block xl:w-1/4 rounded-xl"
          src={lightYagami}
          alt="light-yagami"
        />
        <div className="w-1/3">
          <h1 className="text-6xl font-bold text-white">What is AniQuotes?</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit sed
            ullamcorper. Turpis tincidunt id aliquet risus. Lacus sed turpis
            tincidunt id aliquet risus. Sit amet consectetur adipiscing elit
            duis. Turpis egestas integer eget aliquet nibh praesent tristique
            magna sit. Leo vel fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Ac felis donec et odio pellentesque. Purus viverra
            accumsan in nisl nisi scelerisque eu ultrices. Mauris pharetra et
            ultrices neque ornare aenean. Augue lacus viverra vitae congue eu
            consequat ac felis donec. Imperdiet sed euismod nisi porta lorem
            mollis aliquam ut. Amet massa vitae tortor condimentum. Vulputate
            sapien nec sagittis aliquam. Vitae proin sagittis nisl rhoncus
            mattis rhoncus urna neque. Cursus metus aliquam eleifend mi.
          </p>
        </div>
      </div>
      <div className="flex pt-44 justify-evenly">
        <div className="w-1/3">
          <h1 className="text-6xl font-bold text-white">
            Who is poutingemoji?
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit sed
            ullamcorper. Turpis tincidunt id aliquet risus. Lacus sed turpis
            tincidunt id aliquet risus. Sit amet consectetur adipiscing elit
            duis. Turpis egestas integer eget aliquet nibh praesent tristique
            magna sit. Leo vel fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Ac felis donec et odio pellentesque. Purus viverra
            accumsan in nisl nisi scelerisque eu ultrices. Mauris pharetra et
            ultrices neque ornare aenean. Augue lacus viverra vitae congue eu
            consequat ac felis donec. Imperdiet sed euismod nisi porta lorem
            mollis aliquam ut. Amet massa vitae tortor condimentum. Vulputate
            sapien nec sagittis aliquam. Vitae proin sagittis nisl rhoncus
            mattis rhoncus urna neque. Cursus metus aliquam eleifend mi.
          </p>
        </div>
        <img
          className="hidden md:block xl:w-1/4 rounded-xl"
          src={lightYagami}
          alt="light-yagami"
        />
      </div>
      <div className="flex items-center justify-center py-44">
        <img
          className="hidden md:block xl:w-1/4 rounded-xl"
          src={lightYagami}
          alt="light-yagami"
        />
        <FadeInWrapper>
          <div className="flex flex-col text-5xl font-bold text-center text-white xl:text-6xl 2xl:text-7xl">
            The Numbers
            <hr className="mt-5"></hr>
            {Object.keys(theNumbersData).map((key, i) => (
              <div key={i} className="my-3">
                <CountUp end={theNumbersData[key].length} duration={5} />
                <p className="text-xl font-medium uppercase text-gray">{key}</p>
              </div>
            ))}
          </div>
        </FadeInWrapper>
      </div>
      <h3 className="py-1 text-4xl font-bold text-center uppercase">
        📖 Once upon a time...
      </h3>
      <InfiniteScroll
        dataLength={curQuotes.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
        scrollThreshold={"100%"}
        endMessage={
          <h3 className="py-1 text-4xl font-bold text-center uppercase">
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
