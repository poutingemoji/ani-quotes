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

function Authors({ authors }) {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;

  function handlePageClick({ selected }) {
    setCurrentPage(selected);
  }

  return (
    <>
      <div className="pt-20 text-center">
        <h1 className="text-5xl font-black uppercase">Authors</h1>
      </div>

      <Grid>
        {authors.slice(offset, offset + PER_PAGE).map((author, i) => {
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

      <ReactPaginate
        previousLabel={"«"}
        nextLabel={"»"}
        pageCount={Math.ceil(authors.length / PER_PAGE)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"previous pagination-link"}
        breakClassName={"break pagination-link"}
        nextLinkClassName={"next pagination-link"}
        pageClassName={"page pagination-link"}
        disabledClassName={"disabled pagination-link"}
        activeClassName={"active pagination-link"}
        forcePage={currentPage}
      />
    </>
  );
}

export default Authors;
