import { useState } from "react";

interface ClickCounterProps {
    title : string;
    message : string;
    hoverMessage : string;
}

const ClickCounter = ({title, message, hoverMessage}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
        <h2>{title}</h2>
        {isHovered && <p>{hoverMessage}</p>}
        <button 
            onClick={() => setCount(count + 1)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

        Clicked {count} times
      </button>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter;