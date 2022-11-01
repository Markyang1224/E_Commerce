const mongoose = require("mongoose");

const commoditySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  count: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Commodity", commoditySchema);
