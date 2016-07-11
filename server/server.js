var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
// var routes = require('./routes');

var app = express();

app.use(morgan('dev'));
app.use(parser.json());
// app.use('/', routes);
app.use(express.static('./client'));

app.listen(3000, function() {
	'listenening on port 3000';
})

module.exports = app;