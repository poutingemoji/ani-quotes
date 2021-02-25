import { capitalCase } from "change-case";
import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

const Quotes = ({ quotes, isLoading }) => {
  let { topic = "", author = "" } = useParams(); 
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
