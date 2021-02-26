import Tippy from "@tippyjs/react";
import { snakeCase } from "change-case";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import Loading from "../components/Loading";
import { groupBy } from "../utils/Helper";

const Authors = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  const authors = groupBy(quotes, (quote) => quote.author.name);
  return (
    <>
      <div className="pt-20 mx-32 text-center">
        <h1 className="text-5xl font-black uppercase">Authors</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-3 md:gap-6 md:m-6 lg:grid-cols-4 2xl:grid-cols-5 bg-secondary">
        {Object.keys(authors)
          .sort()
          .map((key, i) => {
            const author = authors[key][0].author;
            return (
              <Tippy content={author.name} key={i}>
                <Link to={`/authors/${snakeCase(key)}`}>
                  <button
                    className="w-full h-full rounded-lg py-52"
                    style={{
                      backgroundImage: `url(${author.image})`,
                      backgroundSize: "cover",
                    }}
                  ></button>
                </Link>
              </Tippy>
            );
          })}
      </div>
      <div className="flex flex-row flex-wrap justify-center"></div>
    </>
  );
};

export default Authors;
