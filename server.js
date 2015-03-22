var express = require('express');
var app = express();
var morgan = require('morgan');  // log requests to the console (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var mongojs = require('mongojs');
var db = mongojs('todolist', ['todolist']);
var bodyParser = require('body-parser');  // pull information from HTML POST (express4)

app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.set('view engine', 'ejs');
var server = require('http').createServer(app);

// listen (start app with node server.js) ======================================

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/todolist', function(req, res){
  db.todolist.find(function(err, docs){
    res.json(docs);
  });
});

app.post('/todolist', function(req, res){
  console.log(req.body);
  db.todolist.insert(req.body, function(err, docs){
    res.json(docs);
  });
});

app.listen(3000);
console.log("App listening on port 3000");


module.exports = server;