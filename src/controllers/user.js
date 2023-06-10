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
    await User.create({
        name,
        email,
        phone
    }).catch(error => console.log(error));

    await res.redirect('/');
};

const editUser = async (req, res) => {
    const {id} = await req.params;
    const user = await User.findOne({
        where: {
            id: id
        },
        raw: true
    }).catch(error => console.log(error))
    res.render('editUser', {user});
};

const updateUser = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    const selector = {
        where: {id: id}
    };
await User.update(data, selector).catch(error => console.log(error))

    res.redirect('/')
};

const viewUser = async (req, res) => {
    const {id} = req.params;
    const user = await User.findOne({
        where: {
            id:id
        },
        raw: true
    }).catch(error => console.log(error))

    res.render('viewUser', {user});
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    await User.destroy({
        where: {
            id:id
        },
        raw: true
    }).catch(error => console.log(error))

    res.redirect('/');
};

module.exports = {
    allUser,
    userForm,
    saveUser,
    editUser,
    updateUser,
    viewUser,
    deleteUser
};