const User = require('../models/user.js');

const allUser = async (req, res) => {
    const users = await User.findAll({
        raw: true
    }).catch(error => console.log(error))
    await res.render('home', {users});
};

const userForm = async (req, res) => {
    await res.render('createUser');
}

const saveUser = async (req, res) => {
    const {name, email, phone} = req.body;
    const user = await User.create({
        name,
        email,
        phone
    }).catch(error => console.log(error));
    console.log(user);

    await res.redirect('/');
};

module.exports = {
    allUser,
    userForm,
    saveUser
};