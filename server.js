var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var moment = require('moment');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

var clientInfo = {};
io.on('connection', function(socket) {
    console.log('User connected via socket.io');

    socket.on('joinRoom', function(req) {
        clientInfo[socket.id] = req;
        socket.join(req.room);
        socket.broadcast.to(req.room).emit('message', {
            name: 'System',
            text: req.name + ' has join!',
            timestamp: moment().valueOf()
        })
    });
    socket.on('message', function(message) {
        console.log('message received:' + message.text);

        //socket.broadcast.emit('message', message); send message except sender
        message.timestamp = moment().valueOf();
        io.to(clientInfo[socket.id].room).emit('message', message);
        // io.emit('message', message); //send to all connected user

    });
    socket.emit('message', {
        text: 'Welcome',
        timestamp: moment().valueOf(),
        name: 'System'
    });
});
app.get('/', function(req, res) {
    res.send('Chat Application');
});


http.listen(port, function() {
    console.log('Server is running at port: ' + port);
})
