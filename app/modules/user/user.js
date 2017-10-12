const express = require("express");
const router = express.Router();

const index_controller = require("./controller/indexController");

router.get('/', index_controller.index);
router.get('/:id(\\d+)', index_controller.get_user);
//router.get('/:userId(\\d+)', index_controller.get_user);
router.post('/add', index_controller.add_user);

router.get('/login', index_controller.login_user);
router.post('/login', index_controller.login_user);

module.exports = router