import { useParams } from "react-router-dom";
import { groupBy } from "../utils/Helper";
import Loading from "../components/Loading";
import Gallery from "../components/Gallery";
import { capitalCase } from "change-case";

const Quotes = ({ quotes, isLoading }) => {
  console.log(quotes, isLoading);
  let { topic = "", author = "" } = useParams();
  console.log(capitalCase(author))
  if (isLoading) return <Loading />;
  return (
    <div className="pt-20">
      {
        <Gallery
          quotes={quotes.filter(
            (quote) =>
              quote.topics.includes(capitalCase(topic)) || quote.author.name === capitalCase(author)
          )}
        ></Gallery>
      }
    </div>
  );
};

export default Quotes;
