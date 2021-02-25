import Card from "./Card";
function Gallery({ quotes }) {
  return (
    <div className="mx-5 masonry before:box-inherit after:box-inherit">
      {quotes.map((quote) => (
        <Card
          image={quote.author.image}
          title={quote.author.name}
          content={quote.text}
        />
      ))}
    </div>
  );
}
export default Gallery;
