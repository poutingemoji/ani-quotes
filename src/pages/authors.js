import { Link } from "react-router-dom";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import authorQuotes from "../data/authorQuotes";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../components/Loading";

const PER_FETCH = 36;
function Authors({ authors }) {
  const [curAuthors, setCurAuthors] = useState(authors.slice(0, PER_FETCH));
  const [hasMore, setHasMore] = useState(true);

  function fetchMoreData() {
    if (curAuthors.length >= authors.length) return setHasMore(false);
    setCurAuthors(
      curAuthors.concat(
        authors.slice(curAuthors.length, curAuthors.length + PER_FETCH)
      )
    );
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={curAuthors.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Loading />}
        scrollThreshold={"100%"}
      >
        <Grid>
          {curAuthors.map((author, i) => {
            return (
              <Link to={`/authors/${author.id}`} key={i}>
                <ImageButton
                  className={"h-96"}
                  title={author.name.full}
                  numOfQuotes={authorQuotes[author.id].length}
                  image={author.image.large}
                />
              </Link>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default Authors;
