var http = require("http");
var sockjs = require('sockjs');
var net = require('net');

// ------------- GenService

var GenService = new net.Socket();
GenService.connect(15001, '127.0.0.1', function() {
    console.log('Connected to GenService');
});

GenService.on('data', function(data) {
    data = '' + data;
    BroadcastMessage(data);
    //console.log(data);
    console.log("Recived from Gen");
});

GenService.on('close', function() {
    console.log('GenService Connection closed by server');
});

GenService.on('error', function() {
    console.log('GenService Connection error');
});


// ------------- HTTP

server = http.createServer();

var ClientList = {};

function BroadcastMessage(message)
{
    for ( var id in ClientList ){
        ClientList[id].write(JSON.stringify(
            { type: "broadcast", message:message}
        )); /// ---------- hand
    }
}


function onConnection(CON) {
    console.log('connected:' + CON.id);
    ClientList[CON.id] = CON;

    CON.on('data', function onDataCON (data) {
        //console.log(JSON.parse(data));


        BroadcastMessage(data);
    });


    CON.on('close', function onCloseCON () {
        console.log('Disconnected: ' + CON.id);
        delete ClientList[CON.id];
    });

    CON.write(JSON.stringify(
        { type: "init", posRect: {posLow: [10,10],posHi: [13,13] }}
        )); /// ---------- hand

}





webSockets = sockjs.createServer();
webSockets.on('connection', onConnection);

webSockets.installHandlers(server, { prefix:'/data' } );
server.listen(15000, '0.0.0.0');




console.log('Web Service is started');

