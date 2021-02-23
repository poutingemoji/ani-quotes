import React from "react";
const Card = ({ image, title, content }) => {
  return (
    <div className="flex flex-col w-8/12 p-3 sm:w-5/12 md:w-2/12">
      <div className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg bg-foreground">
        <div
          className="bg-cover h-80"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex-1 mb-2 text-sm text-gray-900">
            <p>"{content}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
