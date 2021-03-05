import Card from "../components/Card";
import { useState } from "react";
import Masonry from "../components/Masonry";
import ReactPaginate from "react-paginate";

const PER_PAGE = 18;

function Search({ quotes }) {
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
  console.log(quotes);
  const quoteResults = quotes.filter((quote) => {
    console.log(quote.author.media.title.english);
    return (
      quote.text.toLowerCase().includes(query.toLowerCase()) ||
      quote.topics.includes(query.replace(/ /g, "_")) ||
      quote.author.name.full.toLowerCase().includes(query.toLowerCase()) ||
      quote.author.media.title.english
        ?.toLowerCase()
        .includes(query.toLowerCase())
    );
  });

  const pageCount = Math.ceil(quoteResults.length / PER_PAGE);
  return (
    <div className="flex flex-col items-center pt-20">
      <div class="flex rounded-lg bg-primary w-1/5">
        <button>
          <span class="w-auto flex justify-end items-center text-grey p-2">
            <i className="text-lg fas fa-search"></i>
          </span>
        </button>
        <input
          className="w-full mr-4 text-white rounded bg-primary"
          type="text"
          onKeyDown={handleKeyDown}
        />
      </div>

      {query.length > 0 && (
        <>
          <div className="flex flex-col justify-center">
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
        </>
      )}
    </div>
  );
}

export default Search;
//fixed z-50 w-screen h-screen
