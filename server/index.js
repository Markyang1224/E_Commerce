const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const passport = require("passport");
const AuthRoute = require("./routes/auth");
const CommodityRoute = require("./routes/commodity");
require("./config/passport")(passport);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", AuthRoute);
app.use(
  "/api/commodity",
  passport.authenticate("jwt", { session: false }),
  CommodityRoute
);

mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => {
    console.log("Connect to MongoDB Atlas");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
