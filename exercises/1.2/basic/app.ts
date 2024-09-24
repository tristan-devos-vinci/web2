import express, { ErrorRequestHandler, Request, Response, NextFunction } from "express";

import usersRouter from "./routes/users";
import filmRouter from "./routes/films";

const app = express();

let getRequestCount = 0;
// 1.2
const requestStatsLogger = (req: Request, _res: Response, next: NextFunction) => {
  if (req.method === "GET") {
    getRequestCount++;
    console.log(`Number of GET requests: ${getRequestCount}`);
  }
  next();
};

app.use(requestStatsLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use('/films', filmRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};


app.use(errorHandler);

export default app;
