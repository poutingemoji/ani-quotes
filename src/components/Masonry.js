import Card from "./Card";
import FadeInWrapper from "./FadeInWrapper";

function Masonry({ quotes }) {
  return (
    <div className="mx-5 masonry before:box-inherit after:box-inherit">
      {quotes.map((quote, i) => (
        <FadeInWrapper key={i}>
          <Card
            image={quote.image}
            text={quote.text}
            author={quote.author}
            tags={quote.topics}
          />
        </FadeInWrapper>
      ))}
    </div>
  );
}
export default Masonry;
