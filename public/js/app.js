 var socket = io();
socket.on('connect', function(){
    console.log('User connected to socket io server');
});
socket.on('message', function(message){
    console.log(message.text);
});
