const mongoose = require("mongoose");

const DbUrl = "mongodb+srv://akshat:jain@cluster0.4ch7g7l.mongodb.net/SignUp";

async function ConnectDB() {
  await mongoose.connect(DbUrl);
  console.log("Connected to Database");
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
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
});

const User = mongoose.model("User", userSchema);

module.exports = { ConnectDB, User };
