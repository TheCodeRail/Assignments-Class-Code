const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSeceret = "abcdefh";
const { ConnectDB, User } = require("./db");
const { z } = require("zod");
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

// creating a validation schema
const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be in 6 characters"),
});

//SignUp Route
app.post("/signup", async function (req, res) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const validateResponse = signUpSchema.safeParse(req.body);
    if (!validateResponse.success) {
      return res.status(400).json({ error: validateResponse.error.errors });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    return res.status(200).json({ msg: "User Created Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something Went Wrong" });
  }
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
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res
        .status(400)
        .json({ msg: "Email is not registered! Plz SignUp" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({ msg: "Your password is wrong" });
    }

    // if (pass !== hashedPassword) {
    //   return res.status(400).json({ msg: "Your password is wrong" });
    // }
    const token = jwt.sign({ _id: user._id }, jwtSeceret);
    console.log(token);
    return res.status(200).json({ msg: "Login Successfull", token });
  } catch (error) {
    return res.status(500).json({ msg: "Something Went wrong in server" });
  }
});

// listening the server
app.listen(port, function () {
  console.log(`Server is running on the port number ${port}`);
});
