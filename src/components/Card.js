import React from "react";
const Card = ({ image, title, content }) => {
  return (
    <div className="w-6/12 sm:w-3/12 md:w-2/12 flex flex-col p-3">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div
          className="bg-cover h-80"
          style={{backgroundImage: `url(${image})`}}
        ></div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-4 text-2xl">{title}</h3>
          <div className="mb-4 text-grey-darker text-sm flex-1">
            <p>{content}</p>
          </div>
          <a
            href="#"
            className="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
