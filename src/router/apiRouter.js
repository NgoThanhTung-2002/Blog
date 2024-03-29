const express = require("express");
const router = express.Router();

router.get("/t", (req, res) => {
  res.send("router rieng1");
});

router.get("/tt", (req, res) => {
  res.send("router rieng2");
});

router.get("/ttt", (req, res) => {
  res.send("router rieng3");
});

router.get("/tttt", (req, res) => {
  res.send("router rieng4");
});

router.get("/:id", (req, res) => {
  res.send("nen de :id cuoi cung");
});

module.exports = router;
