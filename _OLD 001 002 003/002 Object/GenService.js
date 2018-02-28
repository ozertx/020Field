



var net = require('net');
var ObjectModule = require('./objectmodule');


// --------------------------   Surface -------------


var surface = new ObjectModule(1);

//surface.ConnectionOn(0,10,10,12,12);


/* //test
surface.ConnectionOn(1,10,10,20,20);
surface.ConnectionOn(2,10,10,20,20);
surface.ConnectionDelete(1,10,10,20,20);
*/

function TickFunc()
{
    surface.Update();
    surface.ConnectionUpdate();
}



setInterval(TickFunc,2000);



console.log('Generation Service is started');


//  ---------------------- Server ------------------------------------


var server = net.createServer(function(socket) {
//    socket.write('Echo server\r\n');
//    socket.pipe(socket);
});

server.listen(15001, function() {
    console.log('server listening to %j', server.address());
});

server.on('connection', OnConnect);


function OnConnect(CON) {
    var remoteAddress = CON.remoteAddress + ':' + CON.remotePort;


    surface.ConnectionOn(CON,10,10,12,12);

    console.log("connected: " + CON.id);

    CON.on('data', onConnData);
    CON.once('close', onConnClose);
    CON.on('error', onConnError);


    function onConnData(d) {
        console.log('connection data from %s: %j', remoteAddress, d);
        //conn.write(d);
    }

    function onConnClose() {
        console.log('connection from %s closed', remoteAddress);
        surface.ConnectionDelete(CON);
    }

    function onConnError(err) {
        console.log('Connection %s error: %s', remoteAddress, err.message);
    }



}

