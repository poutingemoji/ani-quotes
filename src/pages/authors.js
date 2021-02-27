import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";
import Loading from "../components/Loading";
import { groupBy } from "../utils/Helper";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import authorQuotes from "../data/authorQuotes";

const Authors = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  const authors = groupBy(quotes, (quote) => quote.author.id);
  return (
    <>
      <div className="pt-20 mx-32 text-center">
        <h1 className="text-5xl font-black uppercase">Authors</h1>
      </div>

      <Grid>
        {Object.keys(authors)
          .sort((a, b) => authorQuotes[b].length - authorQuotes[a].length)
          .map((key, i) => {
            const author = authors[key][0].author;
            const numOfQuotes = authorQuotes[author.id].length;
            return (
              <Link to={`/authors/${author.id}`} key={i}>
                <ImageButton
                  className="py-40"
                  title={author.name}
                  numOfQuotes={numOfQuotes}
                  image={author.image}
                />
              </Link>
            );
          })}
      </Grid>
      <div className="flex flex-row flex-wrap justify-center"></div>
    </>
  );
};

export default Authors;
