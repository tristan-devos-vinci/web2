// File: src/App.tsx

import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import { Movie } from './types';
import "./App.css";

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch('/movies.json')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);


  const addMovie = (movie: Movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <h1>My Favorite Movies</h1>
      <MovieList movies={movies} />
      <h2>Add a New Movie</h2>
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;