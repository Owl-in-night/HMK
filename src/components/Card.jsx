import React from "react";

const Card = ({ image, title, description, buttonText, onClick }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={image}
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="mt-4 text-center">
        <h3 className="text-2xl font-bold text-primary">{title}</h3>
        <p className="text-secondary text-sm mt-2">{description}</p>
        <button
          className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
