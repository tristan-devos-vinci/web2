import { Movie } from "../types";
import "./App.css";
import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Header from './Header';
import Footer from "./Footer";


const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];

  return (
    <div>
      <Header logoUrl="https://media.istockphoto.com/id/1494642262/fr/photo/les-gens-dans-lauditorium-de-cin%C3%A9ma-avec-%C3%A9cran-blanc-vide.jpg?s=1024x1024&w=is&k=20&c=1oMTdqhYP_U4T59H4h8yuGoRKh4m0IMFGLj0OGHn2rk=">
        <h1>Les films</h1>
      </Header>

      <PageTitle title={pageTitle} />

      <Cinema name={cinema1Name} movies={moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer logoUrl="https://media.istockphoto.com/id/1007557230/fr/photo/projecteur-de-film-sur-fond-fonc%C3%A9.webp?s=2048x2048&w=is&k=20&c=QChPEDNh11I1NTaa2-6E4OuyM37lAaHe_2nIGJUDk_E=">
        <p>Tristan De Vos&copy; 2024</p>
      </Footer>
    </div>
  );
};

export default App;