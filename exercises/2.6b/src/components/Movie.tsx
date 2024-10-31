import { useState } from 'react';

const colors = ['red', 'green'];

const Movie  = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', padding: '10px', margin: '10px' }}>
      <button onClick={handleClick}>Next color: {nextColor}</button>
      <p>Current color: {currentColor}</p>
    </div>
  );
};

export default Movie;