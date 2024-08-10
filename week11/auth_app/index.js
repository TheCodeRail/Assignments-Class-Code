const express = require("express");
const cors = require("cors");
const { ConnectDB, User } = require("./db");
const port = 4000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

ConnectDB();

// Checking the server is running
app.get("/", function (req, res) {
  res.send("Hello World!");
});

//SignUp Route
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const response = await User.create({
    username: username,
    email: email,
    password: password,
  });
  res.status(200).json({ msg: "User Created Succesfully" });
});

//sign in
app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({
    email: email,
  });
  if (!user) {
    return res.status(400).json({ msg: "Email is not registered! Plz SignUp" });
  }
  const pass = user.password;
  if (pass !== password) {
    return res.status(400).json({ msg: "Your password is wrong" });
  }
  res.status(200).json({ msg: "Login Successfull" });
});

// listening the server
app.listen(port, function () {
  console.log(`Server is running on the port number ${port}`);
});
