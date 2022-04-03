require("dotenv/config");
require("./database");

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

const routes = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    // credentials: true,
    origin: ["http://localhost:4200", "https://nuzlockedex.herokuapp.com"],
  })
);

app.use(routes)

app.listen(port);