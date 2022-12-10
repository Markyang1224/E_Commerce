const mongoose = require("mongoose");

const commoditySchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    maxLength: 100,
    require: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 1000,
    require: true,
  },
  price: {
    type: Number,
    min: 1,
    require: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  seller: {
    //這個seller跟User model是有戶相關聯的
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Commodity", commoditySchema);
