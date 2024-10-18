import React from 'react';

interface CinemaInfoProps {
  movieTitle: string;
  movieDirector: string;
}

const CinemaInfo: React.FC<CinemaInfoProps> = ({ movieTitle, movieDirector }) => {
  return (
    <li>
      <strong>{movieTitle}</strong> - Réalisateur : {movieDirector}
    </li>
  );
};

export default CinemaInfo;