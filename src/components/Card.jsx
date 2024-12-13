import React from "react";

const Card = ({ icon, title, description, delay }) => {
  return (
    <div
      className={`flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp`}
      data-wow-duration="1s"
      data-wow-delay={delay}
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationDelay: delay,
      }}
    >
      <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="inline-block text-gray-900 mb-4 dark:text-white">
          {icon}
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
