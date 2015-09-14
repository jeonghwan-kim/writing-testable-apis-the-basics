/**
 * External dependencies.
 */

var Sequelize = require('sequelize');
var sequelize = new Sequelize();
// var sequelize = new Sequelize('test', 'root', 'root');

/**
 * User schema.
 */

var User = sequelize.define('User', {
  name: Sequelize.STRING,
  word: Sequelize.STRING
});

exports.model = User;

/**
 * Colorize unicorns
 *
 * @param {Object} query
 * @param {Function} fn
 */

exports.colorizeUnicorns = function(query, fn) {
  User.find({ world: query.word }, function (err, unicorns) {
	  if(err) {
		  return fn(err);
	  }

  	unicorns = unicorns.map(function (uni, key) {
  		uni += key % 2 ? '-purple' : '-pink';
  		return uni;
  	});

	   return fn(null, unicorns);
  });
};
