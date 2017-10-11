
const express = require("express");
const router = express.Router();

const home = require("./controller/homeIndex");

router.get('/', home.index);

module.exports = router