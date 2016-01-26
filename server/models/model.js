var mongoose = require('mongoose');

var /*Schema name here*/Schema = new mongoose.Schema({
  name: String
})

mongoose.model('/*COLLECTION NAME HERE*/', /*Schema name here*/Schema);