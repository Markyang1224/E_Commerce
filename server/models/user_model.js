const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    require: true,
    minLength: 6,
    maxLength: 50,
  },
  password: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 50,
  },
  role: {
    type: String,
    require: true,
    enum: ["customer", "seller"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    bcrypt.hash(this.password, 10, (err, hash) => {
      this.password = hash;
      next();
    });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
