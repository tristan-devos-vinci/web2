// File: src/components/MovieForm.tsx

import React, { useState } from 'react';
import { Movie } from '../types';

interface MovieFormProps {
  addMovie: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie: Movie = { title, director, duration, imageUrl, description, budget };
    addMovie(newMovie);
    setTitle('');
    setDirector('');
    setDuration(0);
    setImageUrl('');
    setDescription('');
    setBudget(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Director:</label>
        <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
      </div>
      <div>
        <label>Duration (minutes):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Budget (million):</label>
        <input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;