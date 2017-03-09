 var socket = io();
 socket.on('connect', function() {
     console.log('User connected to socket io server');
 });
 socket.on('message', function(message) {
     $('.messages').append('<p>'+message.text+'</p>');
 });


 $(document).ready(function() {


     $('#message-form').submit(function(event){
         event.preventDefault();
         socket.emit('message', {
             text: $(this).find('#messageText').val()
         })
        $(this).find('#messageText').val('').focus();
     })
 });
