import { useState } from "react";

interface ClickCounterProps {
    title : string;
    message : string;
}

const ClickCounter = ({title, message}: ClickCounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter;