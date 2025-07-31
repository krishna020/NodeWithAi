const express = require("express");
const userCreate = require("../services/user.service.js");

const router = express.Router();

router.get("/getUser", getuser);
router.post("/createUser", createUser);
router.post("/data", summarizeText);
router.get("/getWetherInfo", getWetherInfo);

function getuser(req, res, next) {
  userCreate
    .getuser(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

function createUser(req, res, next) {
  userCreate
    .createUser(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

function summarizeText(req, res, next) {
  userCreate
    .summarizeText(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

function getWetherInfo(req, res, next) {
  userCreate
    .getWetherInfo(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

module.exports = router;
