import Card from "../components/Card";
import topics from "../data/topics";
import { useState } from "react";
import ImageButton from "../components/ImageButton";
import { Link } from "react-router-dom";
import authorQuotes from "../data/authorQuotes";
import { groupBy } from "../utils/Helper";
import Masonry from "../components/Masonry";
import ReactPaginate from "react-paginate";

const PER_PAGE = 18;

function Search({ quotes, authors }) {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * PER_PAGE;
  const [query, updateQuery] = useState("");
  function handleKeyDown({ key, currentTarget }) {
    if (!(key === "Enter")) return;
    updateQuery(currentTarget.value);
    setCurrentPage(0);
  }

  function handlePageChange({ selected }) {
    setCurrentPage(selected);
  }

  const quoteResults = quotes.filter(
    (quote) =>
      quote.text.toLowerCase().includes(query.toLowerCase()) ||
      quote.topics.includes(query.replace(/ /g, "_")) ||
      quote.author.name.full.toLowerCase().includes(query.toLowerCase())
  );

  const pageCount = Math.ceil(quoteResults.length / PER_PAGE);
  return (
    <div className="flex flex-col items-center pt-20">
      <input
        className="h-10 text-black w-96"
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-col justify-center">
        {query.length > 0 && (
          <Masonry>
            {quoteResults.length > 0 &&
              quoteResults
                .slice(offset, offset + PER_PAGE)
                .map((quote, i) => (
                  <Card
                    key={i}
                    author={quote.author}
                    text={quote.text}
                    image={quote.image}
                    tags={quote.topics}
                  />
                ))}
          </Masonry>
        )}
        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={"«"}
            nextLabel={"»"}
            pageCount={pageCount}
            pageRangeDisplayed={10}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
//fixed z-50 w-screen h-screen
