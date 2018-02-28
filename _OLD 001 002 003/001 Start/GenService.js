


var net = require('net');

var server = net.createServer(function(socket) {
//    socket.write('Echo server\r\n');
//    socket.pipe(socket);
});

server.listen(15001, function() {
    console.log('server listening to %j', server.address());
});

server.on('connection', OnConnect);

var connection;

function OnConnect(CON) {
    var remoteAddress = CON.remoteAddress + ':' + CON.remotePort;

    connection = CON;
    console.log("connected: " + CON.id);

    CON.on('data', onConnData);
    CON.once('close', onConnClose);
    CON.on('error', onConnError);


    function onConnData(d) {
        console.log('connection data from %s: %j', remoteAddress, d);
        conn.write(d);
    }

    function onConnClose() {
        console.log('connection from %s closed', remoteAddress);
    }

    function onConnError(err) {
        console.log('Connection %s error: %s', remoteAddress, err.message);
    }



}




function TickFunc()
{
    console.log('tick');
    if(typeof(connection) !== 'undefined') {
        connection.write('' + Math.random());
        //console.log('writed');
    }
}


setInterval(TickFunc,2000);



console.log('Generation Service is started');
