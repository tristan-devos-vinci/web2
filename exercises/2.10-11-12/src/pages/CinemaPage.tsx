// File: src/pages/CinemaPage.tsx

import React from 'react';
import Cinema from '../components/Cinema';
import '../components/Cinema.css';

const CinemaPage: React.FC = () => {
  const cinema1Name = "Kinepolis";
  const movies1 = [
    { title: "THE EQUALIZER 3", director: "Antoine Fuqua", duration: 120, imageUrl: "https://example.com/equalizer3.jpg" },
    { title: "GOODBYE JULIA", director: "Mohamed Kordofani", duration: 110, imageUrl: "https://example.com/goodbyejulia.jpg" },
  ];

  const cinema2Name = "UGC Toison d'Or";
  const movies2 = [
    { title: "THE WATCHERS", director: "Ishana Night Shyamalan", duration: 130, imageUrl: "https://example.com/thewatchers.jpg" },
    { title: "BAD BOYS: RIDE OR DIE", director: "Adil El Arbi, Bilall Fallah", duration: 140, imageUrl: "https://example.com/badboys.jpg" },
  ];

  return (
    <div>
      <h2>Cinema Listings</h2>
      <Cinema name={cinema1Name} movies={movies1} />
      <Cinema name={cinema2Name} movies={movies2} />
    </div>
  );
};

export default CinemaPage;