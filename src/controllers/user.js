const user = require('../models/user.js');

const allUser = async (req, res) => {
    await res.render('home');
}

module.exports = {
    allUser
};