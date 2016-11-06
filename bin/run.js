'use strict';

const service = require('../server/service');  //no .js here in the end

const http = require('http'); //http object from node.js core


// const server = http.createServer(service); //intiate server by adding in our service object  typing server  

//listen to port 3000
var server = http.createServer(server);
server.listen (3000);

//add log msg to show that the service is actually running 
//subscribe to the listening event of the

server.on('listening',function(){  // IMP: if we want to use variables inside the string in node

console.log(`Slacktest is listening on ${server.address().port} in ${service.get('env')} mode.`)  

// we have to use backticks ` ` instead of regular ticks

}   // function server.address returns an object with info about the running server.
);

// This should give us a proper log message that tells us that the application is actually running. 
