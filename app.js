//NOTE require fuctiuon manages dependancys of program (libraries), modules 
// import http from 'http';
var http = require('http');

//creates server conatant by invoking createServer function on http module api
//accepts arguments that is request listener function
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  //returning hello world with .end method

  res.end('Server is Running ... ');
  //NOTE create server only creates, need listen method to activate 
}).listen(8080 , () => {
  console.log("server is running");
}); 


//block scope created by curly braces {}, variables inside function do not leak if use "let/const", var leaks 

//arrow functon does not care who calls it, great for events and listeners
//normal function binds .this keyword to caller

