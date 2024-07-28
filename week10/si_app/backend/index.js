const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

//middleware

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello T");
});

app.post("/si", function (req, res) {
  console.log("req hitting");
  const principal = req.body.principal;
  const rate = req.body.rate;
  const time = req.body.time;
  const si = (principal * rate * time) / 100;
  res.status(200).json({ si });
});

app.listen(port, function () {
  console.log("server is running on port number 4000");
});
