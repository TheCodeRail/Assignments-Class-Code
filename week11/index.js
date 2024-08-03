const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 4000;
const app = express();
//middlewares
app.use(cors());
app.use(express.json());

// connecting the database
const MongoUrl = "mongodb+srv://akshat:akshat@cluster0.x4qqoiw.mongodb.net/";

async function connectMongoDB() {
  await mongoose.connect(MongoUrl);
  console.log("Database is connected");
}
connectMongoDB();

// creating the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter the username"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // gender: {
    //   type: String,
    //   enum: ["Male", "Female", "Others"],
    // },
  },
  {
    timestamps: true,
  }
);

// creating a model
const User = mongoose.model("User", userSchema);

// stroring the user in the database
app.post("/create", async function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  // storing the data in the database(creating the users)
  const response = await User.create({
    username: username,
    email: email,
    password: password,
  });
  // console.log(response);
  res.send("Working");
});

//routes
app.get("/", function (req, res) {
  res.send("Hello World!");
});

//listen
app.listen(port, function () {
  console.log(`Server is running on port number ${port}`);
});
