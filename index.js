const express = require("express");

const dbConfig = require("./config/config");

const port = process.env.PORT || 5000;

const app = express();

const carRouter = require("./route/carsRoute");

app.use(express.json());

app.use("/api/cars", carRouter);

app.listen(port, () => {
  console.log("Server is runing");
});
