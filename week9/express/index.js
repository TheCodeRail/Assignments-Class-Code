const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/getCookie", function (req, res) {
  res.cookie("name", "Akshat");
  res.send("Cookie has been sent");
});

app.get("/fetchcookie", (req, res) => {
  const name = req.cookies.name;
  res.send(`Cookie value: ${name}`);
});

app.listen(3000, function () {
  console.log("server is running on port number: " + 3000);
});
