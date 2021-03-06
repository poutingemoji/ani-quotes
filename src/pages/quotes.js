import { useParams } from "react-router-dom";
import Masonry from "../components/Masonry";
import Card from "../components/Card";

function Quotes({ quotes, authors }) {
  const { authorId, topic } = useParams();
  let bannerImage;
  let bannerTitle;

  const author = authors.find((author) => author.id === parseInt(authorId))
  return (
    <>
      {author ? (
        <div
          className="bg-foreground-lighter h-screen/3"
          style={{
            backgroundImage: `url(${author.media.bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full bg-gradient-to-t from-background">
            <div className="flex flex-col text-white pl-7 ">
              <span className="pl-2 uppercase letters">
                {author.media.title.english}
              </span>
              <span className="text-4xl font-bold letters sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                {author.name.full}
              </span>
              <a
                href={`https://anilist.co/character/${author.id}`}
                target="_blank"
                rel="noopener"
                className="w-32 px-5 py-1 mt-5 text-sm text-center text-gray-100 uppercase transform rounded-full md:text-base md:px-6 hover:text-white hover:scale-105 md:w-36 bg-green"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="lg:pt-20"></div>
      )}

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
    </>
  );
}

export default Quotes;
//
