import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Card from "../components/Card";

function Search({ quotes, setIsVisible }) {
  const { topic = "", authorId = "" } = useParams();
  return (
    <button onClick={() => setIsVisible(false)}className="fixed z-50 w-screen h-screen bg-secondary-transparent">
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
    </button>
  );
}

export default Search;
