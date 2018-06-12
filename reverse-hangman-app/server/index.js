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
let players = [];
let current_turn = 0;
let _turn = 0;
let player_scores = [];
let round = 1;
let messages = [];
let game_word = '';
let winning_clients = [];

function next_turn(){
    _turn = ++current_turn % players.length;
    players[_turn].broadcast.emit('RECEIVE_USERNAME', player_scores[_turn].name);
    players[_turn].emit('YOUR_TURN');
    console.log("player at index: " + _turn);
}


io.on('connection', (socket) => {
    console.log(socket.id + " is now connected");
    players.push(socket);
    player_scores.push({
        socket: socket,
        score: 0,
        name: ''
    });

    var scores_copy = player_scores.map(a => (a.name + ": " + a.score));

    io.sockets.emit('RECEIVE_ROUND', "Round " + round);
    io.sockets.emit('RECEIVE_ROUND', game_word);
    io.sockets.emit('RECEIVE_SCORES', scores_copy);
    io.sockets.emit('RECEIVE_MESSAGES', messages);


    if (players.length == 1) {
        players[0].emit('YOUR_TURN');
    }
    
    socket.on('NEXT_PLAYER', function(){
        if(players[_turn] == socket){
            next_turn();
            round += 1;
            winning_clients = [];
            messages = [];
            io.sockets.emit('RECEIVE_ROUND', "Round " + round);
         }
    });


    socket.on('SEND_SCORE', function(data){
        player_scores[players.indexOf(socket)].score = data.score;
        var scores_sent = player_scores.map(a => (a.name + ": " + a.score));
        io.sockets.emit('RECEIVE_SCORES', scores_sent);
    });

    
    socket.on('PLAYER_NAME_CHOSEN', function(data){
        if (players[_turn] == socket) {
            socket.broadcast.emit('RECEIVE_USERNAME', data);
            
        }
        player_scores[players.indexOf(socket)].name = data;
    });
    
    socket.on('CHANGE_WORD', function(data){
        game_word = data;
        io.sockets.emit('RECEIVE_WORD', data);
        io.sockets.emit('RECEIVE_ROUND', "Round " + round);
    });
    
    socket.on('SEND_MESSAGE', function(data){

        if (data.guessed_word && winning_clients.indexOf(data.author) === -1) {
            winning_clients.push(data.author);
            data.return_message = data.author + " guessed the word";
            data.checker = 1;

        } else {
            if (winning_clients.indexOf(data.author) !== -1) {
                data.checker = 1;
            }

            data.return_message = data.author + ": " + data.message;
        }

        messages.push(data);

        io.sockets.emit('RECEIVE_MESSAGES', messages);
    });
    
    socket.on('disconnect', function(){
        console.log('A player disconnected');
        var index = players.indexOf(socket);
        players.splice(index,1);
        player_scores.splice(index, 1);
        var scores_sent = player_scores.map(a => (a.name + ": " + a.score));
        io.sockets.emit('RECEIVE_SCORES', scores_sent);

        if (players.length == 0) {
            _turn = 0;
            current_turn = 0;
            round = 1;
            messages = [];
            winning_clients = [];
            game_word = '';
        }

        console.log("Number of players now ",players.length);
    });
    
    
    
});
