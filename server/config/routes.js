var mongoose = require('mongoose');
var act = require('./../controllers/acts.js');
var user = require('./../controllers/users.js')

module.exports = function(app) {

  app.get('/acts', function(req, res) {
    act.index(req, res)
  })

  app.post('/acts', function(req, res) {
    act.create(req, res)
  })

  app.post('/acts' + user.id, function(req, res) {
    act.update(req, res)
  })
}