import { capitalCase } from "change-case";
import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Loading from "../components/Loading";

const Quotes = ({ quotes, isLoading }) => {
  let { topic = "", authorId = "" } = useParams();
  if (isLoading) return <Loading />;
  return (
    <div className="pt-20">
      {
        <Masonry
          quotes={quotes.filter(
            (quote) =>
              quote.topics.includes(capitalCase(topic)) ||
              quote.author.id === authorId
          )}
        ></Masonry>
      }
    </div>
  );
};

export default Quotes;
