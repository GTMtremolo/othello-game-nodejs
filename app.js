var http = require('http');
var express = require('express');
app = express();

app.get('/', (req, res, next) => {
    res.render('./index.html');
});

server = http.createServer(app);

server.listen(process.env.PORT||3000);

var othello = require('./othello');
var io = require('socket.io').listen(server);

io.sockets.on('connect', (socket) => {
    othello.connect(socket);
});