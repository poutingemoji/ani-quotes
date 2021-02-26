import Card from "./Card";

function Gallery({ quotes }) {
  return (
    <div className="mx-5 masonry before:box-inherit after:box-inherit">
      {quotes.map((quote, i) => (
        <Card
          key={i}
          image={quote.image}
          text={quote.text}
          author={quote.author}
          tags={quote.topics}
        />
      ))}
    </div>
  );
}
export default Gallery;
