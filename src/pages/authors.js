import { Link } from "react-router-dom";
import ImageButton from "../components/ImageButton";
import Grid from "../components/Grid";
import authorQuotes from "../data/authorQuotes";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const PER_PAGE = 18;

function Authors({ authors }) {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;

  function handlePageChange({ selected }) {
    setCurrentPage(selected);
  }

  return (
    <>
      <div className="pt-20" />
      <Grid>
        {authors.slice(offset, offset + PER_PAGE).map((author, i) => {
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

      <ReactPaginate
        previousLabel={"«"}
        nextLabel={"»"}
        pageCount={Math.ceil(authors.length / PER_PAGE)}
        pageRangeDisplayed={10}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </>
  );
}

export default Authors;
