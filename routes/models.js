var Sequelize = require('sequelize');
var sequelize = new Sequelize();

exports.User = sequelize.define('User', {
  name: Sequelize.STRING
});
