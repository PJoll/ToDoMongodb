import express from "express";
import dbConnection from "./db/connection/index.js";
const startServer = async () => {
  await dbConnection()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  const app = express();

  app.use("/", (req, res) => res.send("Welcome to Todo App"));
app.listen(4000, () => console.log(`🚀 Server listening on port 4000`));
};
startServer();