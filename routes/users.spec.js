var sinon = require('sinon');
var should = require('should');
var httpMocks = require('node-mocks-http');
var users = require('./users');
var models = require('./models');

describe('USERS', function () {
  var res, req;

  beforeEach(function () {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  describe('.index()', function () {
    it('should return the statusCode 200', function () {
      users.index(req, res);
      res.statusCode.should.be.equal(200);
    });

    it('should return user array', function () {
      users.index(req, res);
      JSON.parse(res._getData()).should.be.an.instanceOf(Array).and.have.a.lengthOf(2);
    });
  });

  describe('.show()', function () {
    before(function () {
      sinon.stub(models.User, 'findOne').returns({
        then: function (fn) {
          fn({name: 'Chris'});
        }
      });
    });

    it('should return the statusCode 200', function () {
      req.params.name = 'Chris';
      users.show(req, res);
      res.statusCode.should.be.equal(200);
    });

    it('should return the statusCode 400 if no name', function () {
      delete req.params.name;
      users.show(req, res);
      res.statusCode.should.be.equal(400);
    });

    it('should return a user', function () {
      req.params.name = 'Chris';
      users.show(req, res);
      JSON.parse(res._getData()).should.be.instanceOf(Object).and.have.a.property('name');
    });
  });
});
