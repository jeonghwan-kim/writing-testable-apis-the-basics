var sinon = require('sinon');
var expect = require('chai').expect;

var User = require('./../../lib/User');

describe('User', function() {

  it('#colorizeUnicorns', function(done) {

    // test setup
    var unicorns = [ 'unicorn1', 'unicorn2' ];
    var query = { world: '1' };

    // mocking MongoDB
    sinon.stub(User.model, 'find').yields(null, unicorns);

    // calling the test case
    User.colorizeUnicorns(query, function(err, coloredUnicorns) {

      // asserting
      expect(err).to.be.null;
      expect(coloredUnicorns).to.eql(['unicorn1-pink', 'unicorn2-purple']);

      // as our test is asynchronous, we have to tell mocha that it is finished
      done();
    });
  });
});
