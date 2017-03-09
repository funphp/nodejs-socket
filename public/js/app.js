 var socket = io();
 var name = getQueryVariable('name') || 'Anynomus'
 var room = getQueryVariable('room');
 socket.on('connect', function() {
     console.log('User connected to socket io server');
 });
 socket.on('message', function(message) {
    var momentTimestamp = moment().utc(message.timestamp);
     $('.messages').append('<p><strong>'+message.name+' '+momentTimestamp.local().format('h:mm a')+':</strong>'+message.text+'</p>');
 });


 $(document).ready(function() {


     $('#message-form').submit(function(event){
         event.preventDefault();
         socket.emit('message', {
             text: $(this).find('#messageText').val(),
             name: name
         })
        $(this).find('#messageText').val('').focus();
     })
 });
