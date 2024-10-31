import "./App.css";
import '../index.css';
import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Header from './Header';
import Footer from "./Footer";


const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
    },
    {
      title: "LITTLE MISS SUNSHINE",
      director: "Valerie Faris, Jonathan Dayton",
      description:
        "A family on the verge of a breakdown. A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.",
    }
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
        <p>Tristan De Vos &copy; 2024</p>
      </Footer>
    </div>
  );
};

export default App;