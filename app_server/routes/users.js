const express = require('express');
const router = express.Router();

// controllers
const ctrlUsers = require('../controllers/users');

/* GET users listing. */
router.get('/', ctrlUsers.users);

module.exports = router;
