import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Card from "../components/Card";

function Quotes({ quotes, authors }) {
  const { topic, authorId } = useParams();
  const author = authors?.find((author) => author.id === parseInt(authorId));
  console.log(author?.media);
  return (
    <div className="">
      {authorId && author?.media.bannerImage && (
        <div
          className="h-screen/2"
          style={{
            background: `url(${author.media.bannerImage}) no-repeat center center`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      )}
      <div className="bg-primary h-screen/3"></div>
      <Masonry>
        {quotes
          .filter(
            (quote) =>
              quote.topics.includes(topic) ||
              quote.author.id === parseInt(authorId)
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
    </div>
  );
}

export default Quotes;
//
