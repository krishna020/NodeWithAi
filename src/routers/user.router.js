const express = require("express");
const user = require("../controllers/user.controller");
const authenticator = require("../helpers/middleware");
const router = express.Router();

router.get("/getUser", authenticator, user.getuser);
router.post("/createUser", authenticator, user.createUser);
router.put("/deleteUser", authenticator, user.deleteUser);

module.exports = router;
