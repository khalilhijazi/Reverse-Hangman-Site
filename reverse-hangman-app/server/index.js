const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const socket = require('socket.io');
const app = express();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
res.set('Content-Type', 'application/json');
res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

const server = app.listen(PORT, function () {
console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.sockets.emit('RECEIVE_MESSAGE', data);
    })
});
