console.log('A conectar ... ');
var net = require('net');
var sys = require("sys");
var q = require("q");

global.ips =[];
var client = net.connect({port: 2525},
    function() { //'connect' listener
 		 console.log('connected to Java Server!');
});

client.write(ip);


function clientOn() {
	var deferred = q.defer();
	
	client.on('data', function(data) {
	  ips.push(data.toString());
	  console.log("ips recebidos do Java Server: " + ips);
	  client.end();
	  return deferred.resolve();
	});

	return deferred.promise;
}

global.promise = clientOn();


client.on('end', function() {
  console.log('Disconnected from Java Server');
});


client.end();