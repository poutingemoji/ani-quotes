import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading"

const Home = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  return (
    <>
      <Hero quotes={quotes} />
      <Gallery quotes={shuffle(quotes)} />
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