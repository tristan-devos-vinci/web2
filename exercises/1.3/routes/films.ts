import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "The Social Network",
    director: "David Fincher",
    duration: 120,
    description: "https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg"
  },
  {
    id: 2,
    title: "Little Miss Sunshine",
    director: "Jonathan Dayton, Valerie Faris",
    duration: 101,
    description: "https://upload.wikimedia.org/wikipedia/en/1/16/Little_miss_sunshine_poster.jpg"
  },

];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

router.get("/", (req, res) => {
  if (!req.query["duration-max"]) {
    // Cannot call req.query.budget-max as "-" is an operator
    return res.json(films);
  }
  const durationMax = Number(req.query["duration-max"]);
  const filteredFilms = films.filter((films) => {
    return films.duration <= durationMax;
  });
  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((drink) => drink.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

type NewFilm = Omit<Film, "id">;

export type { NewFilm, Film };



router.post("/", (req, res) => {

  const body: unknown = req.body;

  if (

    !body ||

    typeof body !== "object" ||

    !("title" in body) ||

    !("director" in body) ||

    !("duration" in body) ||

    !("description" in body) ||

    typeof body.title !== "string" ||

    typeof body.director !== "string" ||

    typeof body.duration !== "string" ||

    typeof body.description !== "string" ||

    !body.title.trim() ||

    !body.director.trim() ||

    !body.duration.trim() ||

    !body.description.trim()

  ) {

    return res.sendStatus(400);

  }


  const { title, director, duration, description } = body as NewFilm;


  const nextId =

    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +

    1;


  const NewFilm: Film = {

    id: nextId,

    title,

    director,

    duration,

    description,

  };


  films.push(NewFilm);

  return res.json(NewFilm);

});


export default router;


