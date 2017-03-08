var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

io.on('connection', function(){
    console.log('User connected via socket.io');
});
app.get('/', function(req, res){
    res.send('Chat Application');
});


http.listen(port, function(){
    console.log('Server is running at port: '+port);
})
