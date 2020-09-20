//importing
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var morgan = require("morgan");
const Moviequiz = require("./models/dbmovies");

//app config

const app = express();
const port = process.env.PORT || 9000;
app.use(morgan("dev"));

//middlware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//DB config
const connecton_url =
  "mongodb+srv://admin:rktrBysQbiDlDQKF@cluster0.svyq3.mongodb.net/moviequizdb?retryWrites=true&w=majority";
mongoose.connect(connecton_url, {
  useCreateIndex: true,
  useNewUrlParser: true, //It will parser the top url
  useUnifiedTopology: true,
});

//api routes
app.get("/", (req, res) => res.status(200).send("hellow world"));

app.post("/movieupdate/new", (req, res, next) => {
  const dbmovies = req.body;
  console.log(dbmovies);

  Moviequiz.create(dbmovies, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/movieupdate/dashboard", (req, res) => {
  Moviequiz.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`Listerning on localhost:${port}`));
