const express = require("express");

const app = express();
const port = 3000;

// middleware
app.use(express.text());
app.use(express.json());
// a get route
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// books route
app.get("/books", function (req, res) {
  res.send("You will get the all books");
});

app.get("/books/:bookId", function (req, res) {
  const id = req.params.bookId;

  res.send("You will get a book data with bookid" + id);
});
// a post route
app.post("/", function (req, res) {
  console.log(req.body);
  res.send("You are hitting the post api");
});
// a put route
app.put("/", function (req, res) {
  res.send("You are hitting the put api");
});
// listening the server
app.listen(port, function () {
  console.log("Server is running on the port number " + port);
});
