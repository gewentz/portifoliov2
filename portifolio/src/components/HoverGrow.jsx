import { useState } from 'react';

const HoverGrow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const spanContents = [
    '1',
    '2',
    '3',
    '4',
  ]

  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-1">
      {spanContents.map((content, index) => (
        <span
          key={index}
          className={`h-52 bg-white w-28 flex items-center justify-center text-gray-900 text-center ${activeIndex === index ? 'grow' : 'grow-0'}`}
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
