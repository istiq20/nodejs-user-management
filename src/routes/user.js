const express = require('express');
const { allUser } = require('../controllers/user.js');
const router = express.Router();

router.get('/', allUser);

module.exports = router;