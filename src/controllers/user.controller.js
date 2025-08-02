const express = require("express");
const userCreate = require("../services/user.service.js");
const auth = require("../helpers/middleware.js");

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

function userLogin(req, res, next) {
  userCreate
    .userLogin(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

function deleteUser(req, res, next) {
  userCreate
    .deleteUser(req, res)
    .then((user) =>
      user ? res.json(user) : res.status(400).json({ message: "OK" })
    )
    .catch((err) => next(err));
}

module.exports = {
  getuser,
  createUser,
  summarizeText,
  getWetherInfo,
  userLogin,
  deleteUser,
};
