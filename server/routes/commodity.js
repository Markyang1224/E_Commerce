const router = require("express").Router();
const Commodity = require("../models").commodityModel;
const commodityValidation = require("../validation").commodityValidation;

//list all collection
router.get("/collection", (req, res) => {});

//list some commodity
router.get("/search", (req, res) => {});

//list searched commodity
router.post("/search/:_name", (req, res) => {});

//post commodity form
router.post("/postCommodity", (req, res) => {
  return res.send({ message: "success" });
});

module.exports = router;
