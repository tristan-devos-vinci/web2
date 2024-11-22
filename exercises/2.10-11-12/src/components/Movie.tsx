import React, { useState } from 'react';
import { Movie as MovieType } from '../types';

interface MovieProps {
  movie: MovieType;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <li onClick={toggleDescription} style={{ cursor: 'pointer' }}>
      <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      {showDescription && <p>{movie.description}</p>}
    </li>
  );
};

export default Movie;