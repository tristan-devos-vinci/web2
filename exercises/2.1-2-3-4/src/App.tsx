import React from 'react';
import PageTitle from './PageTitle';
import CinemaInfo from './CinemaInfo';

const App: React.FC = () => {
  const cinema1Movie1Title = "Movie 1 Title";
  const cinema1Movie1Director = "Director 1";
  const cinema2Movie2Title = "Movie 2 Title";
  const cinema2Movie2Director = "Director 2";

  return (
    <div>
      <PageTitle title="Titre de la page" />
      <div>
        <ul>
          <CinemaInfo movieTitle={cinema1Movie1Title} movieDirector={cinema1Movie1Director} />
          <CinemaInfo movieTitle={cinema2Movie2Title} movieDirector={cinema2Movie2Director} />
        </ul>
      </div>
    </div>
  );
};

export default App;