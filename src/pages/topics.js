import { snakeCase } from "change-case";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import topics from "../data/topics";

const Topics = ({ isLoading }) => {
  if (isLoading) return <Loading />;
  return (
    <>
      <div className="pt-20 mx-32 text-center">
        <h1 className="text-5xl font-black uppercase">Topics</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-3 md:gap-6 md:m-6 lg:grid-cols-4 2xl:grid-cols-5 bg-secondary">
        {Object.keys(topics).map((key, i) => (
          <Link to={`/topics/${snakeCase(key)}`}>
            <button
              key={i}
              className="flex flex-col items-center justify-center w-full h-full p-20 text-white rounded-lg hover:underline"
              style={{
                backgroundImage: `linear-gradient(rgba(11, 22, 34, 0.5), rgba(11,22,34,0.5)), url(${topics[key].image})`,
                backgroundSize: "cover",
              }}
            >
              <i className={` fas fa-${topics[key].icon} fa-5x`}> </i>
              <p className="text-2xl">{key}</p>
            </button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Topics;
