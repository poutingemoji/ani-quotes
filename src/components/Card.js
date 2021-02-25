import React from "react";
const Card = ({ image, title, content }) => {
  return (
    <div className="flex flex-col p-3 break-inside">
      <div className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg bg-foreground">
        <div
          className="bg-cover h-96"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="flex flex-col flex-1 p-4">
          <div className="flex-1 mb-2 text-xl text-gray-900">
            <p>"{content}"</p>
          </div>
          <div className="flex">
            <img className="object-cover w-8 h-8 mr-2 rounded-full" src={image} />
            <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
