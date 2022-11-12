/// this file is for designing schema

const mongoose = require("mongoose");

const carsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timeStampes: true,
  }
);

const carsModel = mongoose.model("CarDb", carsSchema);

module.exports = carsModel;
