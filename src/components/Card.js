import topics from "../data/topics";

function Card({ author, text, image, tags }) {
  console.log(image)
  return (
    <div className="flex flex-col p-3 break-inside">
      <div className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg bg-primary">
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
          <div className="flex-1 mb-2 text-xl text-gray">
            <p>"{text}"</p>
          </div>
          <div className="flex">
            <img
              className="object-cover w-8 h-8 mr-2 rounded-full"
              src={author.image}
              alt="author-pfp"
            />
            <h3 className="mb-2 text-xl font-bold text-gray">
              {author.name}
            </h3>
          </div>
          <div className="flex flex-wrap mt-1">
            {tags &&
              tags.map((tag) => (
                <span
                  className="px-2 m-1 text-white rounded-full"
                  style={{ backgroundColor: topics[tag]?.hex || "" }}
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
