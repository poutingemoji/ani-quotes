import React from "react";
import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Cripsy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden md:block md:w-1/2 px-4">
              <div
                className="h-full w-full bg-cover rounded shadow-md"
                style={{ backgroundImage: ImageOne }}
              ></div>
            </div>
            <div className="md:w-1/2 h-auto px-4">
              <div className="mb-8">
                <img className="rounded shadow-md" src={ImageOne} alt="" />
              </div>
              <div>
                <img
                  className="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
