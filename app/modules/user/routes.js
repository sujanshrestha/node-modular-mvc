
const express = require("express");
const router = express.Router();

const index_controller = require("./controller/indexController");

router.get('/', index_controller.index);
router.get('/:id', index_controller.get_user);

module.exports = router