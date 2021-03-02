function Grid({ children }) {
  return (
    <div className="grid grid-cols-2 gap-4 m-4 md:grid-cols-3 md:gap-6 md:m-6 lg:grid-cols-5 2xl:grid-cols-6 bg-secondary">{children}</div>
  );
}
export default Grid;
