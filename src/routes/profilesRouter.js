const express = require("express");
const router = express.Router();

router.get("/get/:username", (req, res) => {
  const username = req.params.username;
  return res.status(200).render("./views/profile.ejs", { name: username });
});

module.exports = router;
