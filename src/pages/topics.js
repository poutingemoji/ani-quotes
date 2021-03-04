import { Link } from "react-router-dom";
import topics from "../data/topics";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import { groupBy } from "../utils/Helper";

function Topics({ quotes }) {
  const topicQuotes = groupBy(quotes, (quote) => quote.topics);
  return (
    <>
      <div className="pt-20" />
      <Grid>
        {Object.keys(topicQuotes)
          .sort()
          .sort((a, b) => topicQuotes[b].length - topicQuotes[a].length)
          .map((key, i) => (
            <Link to={`/topics/${key}`} key={i}>
              <ImageButton
                className={"h-80"}
                icon={topics[key]?.icon}
                title={key}
                numOfQuotes={topicQuotes[key].length}
                image={topics[key]?.image}
              />
            </Link>
          ))}
      </Grid>
    </>
  );
}

export default Topics;
