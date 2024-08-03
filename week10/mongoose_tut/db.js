const mongoose = require("mongoose");

const mongoDBUrl = "mongodb://localhost:27017/mydatabase";

async function connectMongo() {
  await mongoose.connect(mongoDBUrl);
  console.log("connected to mongodb");
}

module.exports = connectMongo;
