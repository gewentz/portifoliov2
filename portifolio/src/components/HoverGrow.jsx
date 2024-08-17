import { useState } from "react";

const HoverGrow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const spanContents = [
    <a
      href="https://setembro-amarelo-eosin.vercel.app/"
      blank
      className="bg-site-cover bg-no-repeat bg-center bg-cover w-full h-full rounded-md flex flex-col justify-end space-y-3 p-2 overflow-hidden items-center "
    >
      <h2 className="uppercase font-black z-10 text-gray-950 bg-primary p-2 rounded-md w-fit">
        Site
      </h2>
      <div className="flex flex-row justify-between md:px-4 z-10 gap-2">
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          React JS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          MongoDB
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          NodeJS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          Express
        </span>
      </div>
    </a>,
    <a
      href="https://setembro-amarelo-eosin.vercel.app/"
      blank
      className="bg-site-cover bg-no-repeat bg-center bg-cover w-full h-full rounded-md flex flex-col justify-end space-y-3 p-2 overflow-hidden items-center "
    >
      <h2 className="uppercase font-black z-10 text-gray-950 bg-primary p-2 rounded-md w-fit">
        Site
      </h2>
      <div className="flex flex-row justify-between md:px-4 z-10 gap-2">
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          React JS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          MongoDB
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          NodeJS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          Express
        </span>
      </div>
    </a>,
    <a
      href="https://setembro-amarelo-eosin.vercel.app/"
      blank
      className="bg-site-cover bg-no-repeat bg-center bg-cover w-full h-full rounded-md flex flex-col justify-end space-y-3 p-2 overflow-hidden items-center "
    >
      <h2 className="uppercase font-black z-10 text-gray-950 bg-primary p-2 rounded-md w-fit">
        Site
      </h2>
      <div className="flex flex-row justify-between md:px-4 z-10 gap-2">
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          React JS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          MongoDB
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          NodeJS
        </span>
        <span className="bg-primary text-gray-200 shadow-lg p-1 px-2 rounded-md text-xs md:text-base overflow-hidden">
          Express
        </span>
      </div>
    </a>,
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-1">
      {spanContents.map((content, index) => (
        <span
          key={index}
          className={`h-32 md:h-52 bg-gray-700 bg-opacity-50 rounded-md md:w-28  flex items-center justify-center text-gray-900 text-center shadow-md overflow-hidden p-2 ${
            activeIndex === index ? "grow" : "grow-0"
          }`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(0)}
        >
          {content}
        </span>
      ))}
    </div>
  );
};

export default HoverGrow;
