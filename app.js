'use strict';

//Load Modules
var express    = require('express'),
	socket 	   = require('socket.io'),
	bodyParser = require('body-parser'),
	path       = require('path');

var app = express();


//Express setup
	app = express();
app.set( 'port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));

 app.use( express.static( path.join( __dirname, 'app' ) ) );

// app.get('/', function(res){
// 	res.sendFile('index.html');
// });


//Start server
app.listen( app.get( 'port' ),function() {
	console.log( 'Listening on port: ' + app.get( 'port' ));
});