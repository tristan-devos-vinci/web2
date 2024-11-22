// File: src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import CinemaPage from './pages/CinemaPage';
import MovieListPage from './pages/MovieListPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="cinema" element={<CinemaPage />} />
          <Route path="movies" element={<MovieListPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);