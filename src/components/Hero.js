import { memo } from "react";
function Hero({ quotes }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-x-hidden bg-secondary">
        <iframe
          title="youtube-bg"
          style={{
            width: "calc((100vh * 16) / 9)",
          }}
          className="h-full"
          src="https://www.youtube.com/embed/z9Ug-3qhrwY?controls=0&autoplay=1&loop=1&mute=1&playlist=z9Ug-3qhrwY"
          allowFullScreen
        />
        <div className="absolute z-30 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-secondary">
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

export default memo(Hero);
