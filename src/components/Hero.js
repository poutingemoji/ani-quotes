function Hero({ quotes }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-x-hidden bg-secondary">
        <iframe
          title="youtube-bg"
          style={{
            width: "calc((100vh * 16) / 9)",
            pointerEvents: "none",
          }}
          className="absolute h-screen"
          src="https://www.youtube.com/embed/z9Ug-3qhrwY?controls=0&autoplay=1&loop=1&mute=1"
          allowFullScreen
        />
        <div
          style={{
            background:
              "linear-gradient(rgba(11, 22, 34, 0.5), rgb(11,22,34) 90%)",
          }}
          className="z-30 flex flex-col items-center justify-center w-full h-full bg-black "
        >
          <div className="text-6xl text-left lg:text-7xl xl:text-8xl">
            <span className="font-light text-white ">poutingemoji's</span>
            <div>
              <span className="font-semibold text-white">Ani</span>
              <span className="font-bold text-blue ">Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
