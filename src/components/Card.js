import topics from "../data/topics";
import { Link } from "react-router-dom";
function Card({ author, text, image, tags }) {
  return (
    <div className="flex flex-col p-3 break-inside">
      <div className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg bg-foreground">
        {image && (
          <div
            className="bg-cover h-96"
            style={{
              background: `url(${image}) no-repeat center center`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        )}
        <div className="flex flex-col flex-1 p-4">
          <div className="flex-1 mb-2">
            <p className="text-lg font-normal text-left lg:text-lg text-text">"{text}"</p>
          </div>
          <Link to={`/authors/${author.id}`}>
            <div className="flex text-white hover:underline">
              <img
                className="object-cover w-8 h-8 mr-2 rounded-full"
                src={author.image.large}
                alt="author"
              />
              <h3 className="mb-2 text-lg font-semibold lg:text-lg">
                {author.name.full}
              </h3>
            </div>
          </Link>
          <div className="flex flex-wrap mt-1">
            {tags &&
              tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 mr-2 text-base font-normal text-white capitalize rounded-full hover:text-text bg-foreground-light"
                  style={{ background: topics[tag]?.hex }}
                >
                  <Link to={`/topics/${tag}`}>{tag.replace(/_/g, " ")}</Link>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
