var models = require('./models');

// GET users listing
exports.index = function(req, res, next) {
  res.json([{
    name: 'Chris',
  }, {
    name: 'Sam'
  }]);
};

// Find a user by name
exports.show = function(req, res, next) {
  if (!req.params.name) return res.send(400);

  models.User.findOne({
    where: {name: req.params.name}
  }).then(function (user) {
    if (!user) return res.send(404);
    res.json(user);
  }, function (err) {
    res.send(500, err);
  });
};
