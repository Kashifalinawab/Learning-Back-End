// this is for mogodb connection

const mongoose = require("mongoose");
require("dotenv").config();

let mongoUrl = process.env.MONOGODB_URL;

mongoose.connect(mongoUrl);

let connection = mongoose.connection;

connection.on("error", () => {
  console.log("Failed to connect");
});

connection.on("connected", () => {
  console.log("MogoDb is connected");
});

module.exports = mongoose;
