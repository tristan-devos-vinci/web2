// File: src/pages/MovieListPage.tsx

import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';
import { Movie } from '../types';

const MovieListPage: React.FC = () => {
  const initialMovies: Movie[] = [
    {
      title: "Little Miss Sunshine",
      director: "Valerie Faris, Jonathan Dayton",
      duration: 102,
      imageUrl: "https://a.ltrbxd.com/resized/sm/upload/h6/xm/om/q7/dOeM4R55TsAFBXCPNIDDMiJkePr-0-2000-0-3000-crop.jpg?v=09383296c6"
    },
    {
      title: "Under the Silver Lake",
      director: "David Robert Mitchell",
      duration: 139,
      imageUrl: "https://a.ltrbxd.com/resized/film-poster/3/3/0/8/1/0/330810-under-the-silver-lake-0-2000-0-3000-crop.jpg?v=28f0cabef3"
    },
    {
      title: "Memories of Murder",
      director: "Bong Joon-ho",
      duration: 131,
      imageUrl: "https://a.ltrbxd.com/resized/sm/upload/84/xt/e8/mw/gawnVe9cFowdoDLo9Pok12NTw39-0-2000-0-3000-crop.jpg?v=7cad204593"
    },
    {
      title: "City of God",
      director: "Fernando Meirelles",
      duration: 129,
      imageUrl: "https://a.ltrbxd.com/resized/film-poster/5/1/5/2/3/51523-city-of-god-0-2000-0-3000-crop.jpg?v=7517ea94ce"
    },
    {
      title: "Cars",
      director: "John Lasseter",
      duration: 117,
      imageUrl: "https://a.ltrbxd.com/resized/sm/upload/de/kp/63/hd/dWg33ektXuHmxjSjEulwDPTWbC2-0-2000-0-3000-crop.jpg?v=df40f228cb",
      description: "voom"
    }
  ];

  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const addMovie = (movie: Movie) => {
    const updatedMovies = [...movies, movie];
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };

  return (
    <div>
      <h2>My Favorite Movies</h2>
      <MovieList movies={movies} />
      <h2>Add a New Movie</h2>
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default MovieListPage;