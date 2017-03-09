 var socket = io();
 socket.on('connect', function() {
     console.log('User connected to socket io server');
 });
 socket.on('message', function(message) {
    var momentTimestamp = moment().utc(message.timestamp);
     $('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm a')+':</strong>'+message.text+'</p>');
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
