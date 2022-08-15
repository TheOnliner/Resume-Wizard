const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv/config");

const mongoose = require("mongoose");
const cors = require("cors");

const api = process.env.API_URL;

const authJwt = require('./helpers/jwt');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(authJwt());
app.use(express.json());
app.use(morgan("tiny"));

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log("Database connection is ready..");
  })
  .catch((err) => {
    console.log(err);
  });

  //Routes
const usersRoutes = require("./routes/users");
const profilesRoutes = require("./routes/profiles");

app.use(`${api}/users`, usersRoutes);
app.use(`${api}/profiles`, profilesRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.listen(PORT, () => {
  console.log("Server is listening");
});
