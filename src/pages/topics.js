import { Link } from "react-router-dom";
import topics from "../data/topics";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import { groupBy } from "../utils/Helper";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";

const PER_FETCH = 36;
function Topics({ quotes }) {
  const topicQuotes = groupBy(quotes, (quote) => quote.topics);
  const topicKeys = Object.keys(topicQuotes)
    .sort()
    .sort((a, b) => topicQuotes[b].length - topicQuotes[a].length);
  const [curTopicKeys, setCurTopicKeys] = useState(
    topicKeys.slice(0, PER_FETCH)
  );
  const [hasMore, setHasMore] = useState(true);

  function fetchMoreData() {
    if (curTopicKeys.length >= topicKeys.length) return setHasMore(false);
    setCurTopicKeys(
      curTopicKeys.concat(
        topicKeys.slice(curTopicKeys.length, curTopicKeys.length + PER_FETCH)
      )
    );
  }

  return (
    <div className="pt-20">
      <InfiniteScroll
        dataLength={curTopicKeys.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
        scrollThreshold={"100%"}
      >
        <Grid>
          {curTopicKeys.map((key, i) => {
            return (
              <Link to={`/topics/${key}`} key={i}>
                <ImageButton
                  className={"h-80"}
                  icon={topics[key]?.icon}
                  title={key}
                  numOfQuotes={topicQuotes[key].length}
                  image={topics[key]?.image}
                />
              </Link>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default Topics;
