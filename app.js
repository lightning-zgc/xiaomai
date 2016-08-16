var express = require('express');
var routes = require('./routes');
var request = require('request');
var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', routes.index);
app.get('/ai', routes.ai);
app.post('/ai', routes.aifn);

app.get('/stop', function (req, res) {
  process.exit();
});

app.listen(2333, null, function() {
  console.log("start!");
});
