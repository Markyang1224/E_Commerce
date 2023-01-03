const router = require("express").Router();
const Commodity = require("../models").commodityModel;
const commodityValidation = require("../validation").commodityValidation;

router.use((req, res, next) => {
  console.log("A Request is coming into Commodity");
  next();
});

//list all collection
router.get("/collection", (req, res) => {});

//list some commodity
router.get("/search", (req, res) => {});

//list searched commodity
router.get("/search/:name", (req, res) => {
  let { name } = req.params;
  Commodity.find({ name: name })
    .populate("seller", ["username", "email"])
    .then((commodity) => {
      res.status(200).send(commodity);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

//post commodity form
router.post("/postCommodity", async (req, res) => {
  const { error } = commodityValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let { name, description, price } = req.body;

  let newCommodity = new Commodity({
    name,
    description,
    price,
    seller: req.user._id,
  });

  try {
    await newCommodity.save();
    return res.status(200).send({ message: "success" });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

module.exports = router;
