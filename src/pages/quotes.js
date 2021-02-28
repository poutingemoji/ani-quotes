import { capitalCase } from "change-case";
import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Loading from "../components/Loading";
import Card from "../components/Card"
import FadeInWrapper from "../components/FadeInWrapper"

function Quotes({ quotes, isLoading }) {
  let { topic = "", authorId = "" } = useParams();
  if (isLoading) return <Loading />;
  return (
    <div className="pt-20">
      {
        <Masonry>
          {quotes
            .filter(
              (quote) =>
                quote.topics.includes(capitalCase(topic)) ||
                quote.author.id === authorId
            )
            .map((quote, i) => (
              <FadeInWrapper key={i}>
                <Card
                  image={quote.image}
                  text={quote.text}
                  author={quote.author}
                  tags={quote.topics}
                />
              </FadeInWrapper>
            ))}
        </Masonry>
      }
    </div>
  );
};

export default Quotes;
