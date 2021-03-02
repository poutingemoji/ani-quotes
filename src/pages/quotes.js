import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Card from "../components/Card";

function Quotes({ quotes }) {
  const { topic = "", authorId = "" } = useParams();
  return (
    <div className="pt-20">
      {
        <Masonry>
          {quotes
            .filter(
              (quote) =>
                quote.topics.includes(topic) || quote.author.id === authorId
            )
            .map((quote, i) => (
              <Card
                key={i}
                image={quote.image}
                text={quote.text}
                author={quote.author}
                tags={quote.topics}
              />
            ))}
        </Masonry>
      }
    </div>
  );
}

export default Quotes;
