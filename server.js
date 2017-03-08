var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

io.on('connection', function(socket){
    console.log('User connected via socket.io');

    socket.on('message', function(message){
        console.log('message received:' +message.text);

        socket.broadcast.emit('message', message);

    });
    socket.emit('message', {
        text: 'Welcome'
    });
});
app.get('/', function(req, res){
    res.send('Chat Application');
});


http.listen(port, function(){
    console.log('Server is running at port: '+port);
})
