function SearchBar({ handleKeyDown }) {
  return (
    <div class="flex rounded-lg bg-foreground w-60">
      <button>
        <span class="w-auto flex justify-end items-center  p-2">
          <i className="text-lg fas fa-search"></i>
        </span>
      </button>
      <input
        className="w-full mr-4 rounded bg-foreground"
        type="text"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchBar;
