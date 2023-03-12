const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  return res.status(200).send("All good");
});

module.exports = router;
