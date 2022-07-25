const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

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
