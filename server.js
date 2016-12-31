var PORT = process.env.PORT || 3000; 
var express = require ('express'); 
var app = express(); //express server
var http = require('http').Server(app); //starts new server with express app as boilerplate
var io = require('socket.io')(http); 

app.use(express.static(__dirname + "/public")); 

io.on('connection', function(){
	console.log("user connected via socket.io"); 
}); 

http.listen(PORT, function(){
	console.log("server started"); 
});
