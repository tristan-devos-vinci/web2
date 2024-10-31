// File: src/components/MovieList.tsx

import React from 'react';
import { Movie } from '../types';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <p>Directed by: {movie.director}</p>
            <p>Duration: {movie.duration} minutes</p>
            {movie.description && <p>{movie.description}</p>}
            {movie.budget && <p>Budget: ${movie.budget} million</p>}
          </div>
          {movie.imageUrl && <img src={movie.imageUrl} alt={movie.title} className="movie-image" />}
        </div>
      ))}
    </div>
  );
};

export default MovieList;