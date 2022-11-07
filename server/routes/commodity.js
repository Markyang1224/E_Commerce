const router = require("express").Router();

router.get("/postCommodity", (req, res) => {
  console.log(req.user);
});

module.exports = router;
