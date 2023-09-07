const express = require('express');
const {
  getFoods,
  getFood,
  createFood,
  deleteFood,
  updateFood,
} = require("../controllers/foodController");

const router = express.Router();


router.get('/', getFoods)


router.get('/:id', getFood)


router.post("/", createFood);


router.delete("/:id", deleteFood);

router.patch("/:id", updateFood);


module.exports = router; 