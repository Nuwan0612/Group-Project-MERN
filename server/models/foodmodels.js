const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("foods", foodSchema);
