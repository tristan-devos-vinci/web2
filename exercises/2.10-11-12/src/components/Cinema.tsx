import React from 'react';
import { Movie as MovieType } from '../types';
import Movie from './Movie';
import "./Cinema.css";

interface CinemaProps {
  name: string;
  movies: MovieType[];
}

const Cinema: React.FC<CinemaProps> = ({ name, movies }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.title} movie={movie} />
      ))}
    </ul>
  </div>
);

export default Cinema;