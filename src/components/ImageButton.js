function ImageButton({ height = 80, icon, title, numOfQuotes, image }) {
  return (
    <button className="w-full h-full overflow-hidden text-white rounded-lg parent">
      <div
        className="flex flex-col items-center justify-center w-full h-full transform parent-hover:scale-105"
        style={{
          background: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "all 0.3s",
        }}
      >
        <span
          className={`h-${height} flex flex-col items-center justify-center w-full bg-opacity-50 bg-secondary`}
        >
          {icon && <i className={`fas fa-${icon} fa-5x`}></i>}
          <span className="text-3xl">
            {title}
            <p className="font-light">
              {numOfQuotes} Quote{numOfQuotes > 1 ? "s" : ""}
            </p>
          </span>
        </span>
      </div>
    </button>
  );
}

export default ImageButton;
//py-24 py-40