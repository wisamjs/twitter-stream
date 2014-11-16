'use strict';

//Load Modules
var express     = require('express'),
	bodyParser    = require('body-parser'),
	path          = require('path'),
  twit          = require('twit');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Express setup
app.set( 'port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use( express.static( path.join( __dirname, 'app' ) ) );

// Twitter setup
var twitter = new twit({
    consumer_key:         'pqZ378sZluo89KhhtjduBcqS3'
  , consumer_secret:      'Eatfmv4N0cflus9E0AzeNze6kbvnvlDSMYEYxxtEx8LHsaSCAe'
  , access_token:         '210242665-aWItlo6FGTQvYXNh7SRynqCU29ndVwdDIROpIPFM'
  , access_token_secret:  'RdIEljBLaZ3PMKu6UidOTaYzb0g5HjgVd3tMUfv5b6ksL'
});

//Start server
server.listen( app.get( 'port' ),function() {
	console.log( 'Listening on port: ' + app.get( 'port' ));
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

io.on('connection', function (socket) {
  console.log('a user connected');
});