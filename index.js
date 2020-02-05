const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 2000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Untuk Test Connection DB
const { db } = require("./connection");
db.connect(err => {
  if (err) throw err;
  console.log("mysql Connected");
});

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to my API</h1>");
});

const { movieRouter } = require("./router");

app.use("/", movieRouter);

app.listen(PORT, () => console.log(`Aktif di Port ${PORT}`));
