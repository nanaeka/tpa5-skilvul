const express = require('express');
//ini library express router
const router = express.Router();
//ini menuju ke controller
const userController = require('../controllers/user.controller');
//ini url registrasi
router.post("/signup", userController.signUp);
//ini url login
router.post("/login", userController.login)

module.exports = router;