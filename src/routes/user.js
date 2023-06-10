const express = require('express');
const { allUser, userForm, saveUser } = require('../controllers/user.js');
const router = express.Router();

router.get('/', allUser);
router.get('/create', userForm);
router.post('/create', saveUser);

module.exports = router;