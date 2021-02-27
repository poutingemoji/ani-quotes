import Hero from "../components/Hero";
import Masonry from "../components/Masonry";
import Loading from "../components/Loading";
import CountUp from "react-countup";
import authorQuotes from "../data/authorQuotes";
import topics from "../data/topics";
import FadeInWrapper from "../components/FadeInWrapper";

const Home = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  const theNumbersData = {
    "Total Quotes": quotes,
    "Total Authors": Object.keys(authorQuotes),
    Topics: Object.keys(topics),
  };

  return (
    <>
      <Hero quotes={quotes} />
      <div className="flex items-center justify-center">
        <div className="bg-primary w-96 h-96"></div>
        <FadeInWrapper>
          <div className="flex flex-col text-6xl font-bold text-center text-white ">
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

      <Masonry quotes={shuffle(quotes)} />
    </>
  );
};

export default Home;

const shuffle = (arr) =>
  [...arr].reduceRight(
    (res, _, __, s) => (
      res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
    ),
    []
  );
