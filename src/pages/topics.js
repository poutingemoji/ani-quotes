import { snakeCase } from "change-case";
import { Link } from "react-router-dom";
import topics from "../data/topics";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import { groupBy } from "../utils/Helper";
import FadeInWrapper from "../components/FadeInWrapper"

function Topics({ quotes }) {
  const topicQuotes = groupBy(quotes, (quote) => quote.topics);
  return (
    <>
      <div className="pt-20 text-center">
        <h1 className="text-5xl font-black uppercase">Topics</h1>
      </div>

      <Grid>
        {Object.keys(topicQuotes)
          .sort((a, b) => topicQuotes[b].length - topicQuotes[a].length)
          .map((key, i) => (
            <Link to={`/topics/${snakeCase(key)}`} key={i}>
              <FadeInWrapper>
                <ImageButton
                  className={"h-80"}
                  icon={topics[key]?.icon}
                  title={key}
                  numOfQuotes={topicQuotes[key].length}
                  image={topics[key]?.image}
                />
              </FadeInWrapper>
            </Link>
          ))}
      </Grid>
    </>
  );
};

export default Topics;
