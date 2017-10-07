
var express = require('express');

var app = express();
var server = app.listen(3000);
app.use(express.static('public'));

console.log("I am doing socket programming");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connectios: ' + socket.id);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }

}