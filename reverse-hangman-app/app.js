var express = require('express');

var app = express();
const PORT = process.env.PORT || 8080;

const server = http.createServer(app).listen(config.port); 
const io = require('socket.io')(server);
//io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});