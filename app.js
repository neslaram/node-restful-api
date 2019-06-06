const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

let localhost = "";
if (process.env.ENV === "Test") {
  console.log("This is a test");
  localhost = "mongodb://localhost/bookAPI_Test";
} else {
  console.log("This is for real");
  localhost = "mongodb://localhost/bookAPI-prod";
}
const db = mongoose.connect(localhost, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log(`Successfully connected to database.`);
});

const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require("./routes/bookRouter")(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my Nodemon API!");
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
