import { snakeCase } from "change-case";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import topics from "../data/topics";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import { groupBy } from "../utils/Helper";
import FadeInWrapper from "../components/FadeInWrapper"

const Topics = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
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
