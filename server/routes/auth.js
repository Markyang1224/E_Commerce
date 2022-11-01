const router = require("express").Router();
const User = require("../models").userModel;
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;

router.use((req, res, next) => {
  console.log("A Request is coming into Auth");
  next();
});

router.get("/testApi", (req, res) => {
  return res.status(200).send({ message: "request success" });
});

router.post("/register", async (req, res) => {
  //check the validation of data
  let { error } = registerValidation(req.body);
  if (error) return res.status(200).send(error.details[0].message);

  let emailExist = await User.findOne({ email: req.body.email });

  //check email exist or not
  if (emailExist) {
    return res.status(400).send("Email has already exist");
  }

  //save user
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });

  try {
    const SavedUser = await newUser.save();
    return res.status(200).send({ user: SavedUser });
  } catch (err) {
    return res.status(400).send({ message: "Something went wrong" });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ message: error });

  let foundedUser = await User.findOne({ email: req.body.email });
});
module.exports = router;
