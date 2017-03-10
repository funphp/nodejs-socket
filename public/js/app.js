 var socket = io();
 var name = getQueryVariable('name') || 'Anynomus';
 var room = getQueryVariable('room') || 'Anynomus';

 socket.on('connect', function() {
     console.log('User connected to socket io server');
        socket.emit('joinRoom', {
            name:name,
            room:room
        });
 });
 socket.on('message', function(message) {
    var momentTimestamp = moment().utc(message.timestamp);
     $('.messages').append('<li class="list-group-item"><p><strong>'+message.name+' '+momentTimestamp.local().format('h:mm a')+':</strong></p><p>'+message.text+'</p></li>');
 });


 $(document).ready(function() {
     $('.room_title').text(room);

     $('#message-form').submit(function(event){
         event.preventDefault();
         socket.emit('message', {
             text: $(this).find('#messageText').val(),
             name: name
         })
        $(this).find('#messageText').val('').focus();
     })
 });
