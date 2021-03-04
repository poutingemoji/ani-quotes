function ImageButton({ className, icon, title, numOfQuotes, image }) {
  return (
    <button className="w-full h-full overflow-hidden text-white rounded-lg parent bg-primary-light">
      <div
        className="flex flex-col items-center justify-center w-full h-full transform parent-hover:scale-105"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "all 0.3s",
        }}
      >
        <span
          className={`${className} flex flex-col items-center justify-center w-full bg-opacity-50 bg-secondary`}
        >
          {icon && <i className={`fas fa-${icon} fa-5x`}></i>}
          <span className="text-3xl font-semibold capitalize">
            {title.replace(/_/g, " ")}
            <p className="font-light">
              {numOfQuotes} Quote{numOfQuotes !== 1 ? "s" : ""}
            </p>
          </span>
        </span>
      </div>
    </button>
  );
}

export default ImageButton;
//py-24 py-40 v 