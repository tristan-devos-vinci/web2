import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
    {
        id: 1,
        title: "The Social Network",
        director: "David Fincher",
        duration: 120,
        description:"https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg"
   },
   {
    id: 2,
    title: "Little Miss Sunshine",
    director: "Jonathan Dayton, Valerie Faris",
    duration: 101,
    description:"https://upload.wikimedia.org/wikipedia/en/1/16/Little_miss_sunshine_poster.jpg"
   },

];

const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;


