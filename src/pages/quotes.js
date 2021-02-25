import { capitalCase } from "change-case";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

const Quotes = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  let { topic = "", author = "" } = useParams(); 
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
