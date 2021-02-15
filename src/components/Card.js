import React from "react";
const Card = ({ image, title, content }) => {
  return (
    <div className="w-6/12 sm:w-3/12 md:w-2/12 flex flex-col p-3">
      <div className="bg-foreground rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div
          className="bg-cover h-80"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="mb-2 text-gray-900 font-bold text-xl">{title}</h3>
          <div className="mb-2 text-gray-900 text-sm flex-1">
            <p>"{content}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
