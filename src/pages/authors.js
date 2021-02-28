import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { groupBy, query } from "../utils/Helper";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import authorQuotes from "../data/authorQuotes";
import FadeInWrapper from "../components/FadeInWrapper";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 10;
const url = "https://graphql.anilist.co";

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const pageCache = {};

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  function fetchData() {
    console.log(currentPage);
    setIsLoaded(false);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: {
          id_in: Object.keys(authorQuotes).sort(
            (a, b) => authorQuotes[b].length - authorQuotes[a].length
          ),
          page: currentPage + 1,
          perPage: PER_PAGE,
        },
      }),
    };
    
    fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.Page.characters);
        setIsLoaded(true);
        setData(result.data.Page.characters);
      })
      .catch((error) => console.error("Error", error));
  }

  function handlePageClick({ selected }) {
    setCurrentPage(selected);
  }

  return (
    <>
      <div className="pt-20 text-center">
        <h1 className="text-5xl font-black uppercase">Authors</h1>
      </div>
      {isLoaded ? (
        <Grid>
          {data.map((author, i) => {
            return (
              <Link to={`/authors/${author.id}`} key={i}>
                <ImageButton
                  height={96}
                  title={author.name.full}
                  numOfQuotes={authorQuotes[author.id].length}
                  image={author.image.large}
                />
              </Link>
            );
          })}
        </Grid>
      ) : (
        <Loading />
      )}
      {isLoaded ? (
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={Math.ceil(Object.keys(authorQuotes).length / PER_PAGE)}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          breakClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          pageClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          forcePage={currentPage}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
