/**
 * External dependencies.
 */

var mongoose = require('mongoose');

/**
 * User schema.
 */

var schema = new mongoose.Schema({
  name: String,
  world: String
});


/**
 * Register the model.
 */

var User = mongoose.model('User', schema);

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
