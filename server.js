var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(express.static(path.join(__dirname, './client/static')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8888, function() {
  console.log('listening on port 8888........')
})

process.on('uncaughtException', function (err) {
    console.log(err);
}); 
