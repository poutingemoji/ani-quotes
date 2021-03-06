import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function Hero() {
  useEffect(() => {
    const textWrappers = document.getElementsByClassName("letters");
    for (let i = 0; i < textWrappers.length; i++) {
      textWrappers[i].innerHTML = textWrappers[i].textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime.timeline({ loop: false }).add({
      targets: ".letter",
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen overflow-x-hidden bg-background">
        <iframe
          title="youtube-bg"
          style={{
            width: "calc((100vh * 16) / 9)",
          }}
          className="h-full"
          src="https://www.youtube.com/embed/z9Ug-3qhrwY?start=0&end=1810&controls=0&autoplay=1&loop=1&mute=1&playlist=z9Ug-3qhrwY"
          modestbranding="true"
          allowFullScreen
        />
        <div className="absolute z-30 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-background">
          <div className="text-5xl text-left md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="font-light text-white letters">
              poutingemoji's
            </span>
            <div>
              <span className="font-semibold text-white letters">Ani</span>
              <span className="font-bold text-blue letters">Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
