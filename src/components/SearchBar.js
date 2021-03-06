function SearchBar({ handleKeyDown }) {
  return (
    <div class="flex rounded-lg bg-foreground w-1/5">
      <button>
        <span class="w-auto flex justify-end items-center text-grey p-2">
          <i className="text-lg fas fa-search"></i>
        </span>
      </button>
      <input
        className="w-full mr-4 text-white rounded bg-foreground"
        type="text"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
