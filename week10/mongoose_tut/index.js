const express = require("express");
const cors = require("cors");
const connectMongo = require("./db");

const app = express();
const port = 4000;

connectMongo();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server is running on the port number 4000");
});
