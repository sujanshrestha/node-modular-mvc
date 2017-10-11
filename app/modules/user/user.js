const express = require("express");
const router = express.Router();

const index_controller = require("./controller/indexController");

router.get('/', index_controller.index);
router.get('/:id(\\d+)', index_controller.get_user);
router.get('/add', index_controller.add_user);

module.exports = router