
/**
 * Module dependencies.
 */

var express = require('express')
<<<<<<< HEAD
  , routes = require('./routes')
=======
  , routes = require('./routes');
>>>>>>> c251a94dd6031a4795c2f49c9b5401214fc0a9b4

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
<<<<<<< HEAD
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
=======
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
>>>>>>> c251a94dd6031a4795c2f49c9b5401214fc0a9b4
});

// Routes

<<<<<<< HEAD
app.get('/index', routes.index);

app.get('/config', routes.config);

app.get('/teste', routes.teste);

app.post('/index', routes.index);


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
=======
app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
>>>>>>> c251a94dd6031a4795c2f49c9b5401214fc0a9b4
