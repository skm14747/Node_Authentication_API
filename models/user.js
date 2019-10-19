const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const validator = require('validator');
// const bcrypt = require('bcrypt');

var User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: false}).then(function () {
  // Table created
  console.log('ashjh');  
  return User.findOne().then(function (user) {
    console.log(user.get('name'));
});
});





module.exports = User ;