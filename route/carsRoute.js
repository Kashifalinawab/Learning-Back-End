const carRouter = require("express").Router();

// const { response } = require("express");
let Cars = require("../model/cars");

carRouter.get("/get", async (req, res) => {
  const cars = await Cars.find({});
  res.send(cars);
});

carRouter.post("/post", async (request, response) => {
  const newcar = new Cars(request.body);
  const car = await newcar.save();
  response.send(car);
});

carRouter.put("/update/:id", async (request, response) => {
  const Id = request.params.id;
  const { name, model, number } = request.body;
  const updatedCar = await Cars.findByIdAndUpdate(Id, { name, model, number });
  response.send(updatedCar);
});

carRouter.delete("/delete/:id", async (request, response) => {
  const Id = request.params.id;
  const updatedCar = await Cars.findByIdAndRemove(Id);
  response.send(updatedCar);
});

module.exports = carRouter;
