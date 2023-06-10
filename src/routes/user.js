const express = require('express');
const { allUser, userForm, saveUser, editUser, updateUser, viewUser, deleteUser } = require('../controllers/user.js');
const router = express.Router();

router.get('/', allUser);
router.get('/create', userForm);
router.post('/create', saveUser);
router.get('/edit/:id', editUser);
router.post('/update/:id', updateUser);
router.get('/view/:id', viewUser);
router.get('/delete/:id', deleteUser);

module.exports = router;