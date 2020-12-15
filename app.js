//NOTE require is built in fuctiuon manages dependancys of program (libraries), modules 
// require returns api of module requiring;
var http = require('http');

//creates server conatant by invoking createServer function on http module api
//accepts arguments that is request listener function
//req = request object, type: incomingMessage 
//res = response object, type: serverResponse
//res/req both streams 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // console.log(req);
  //returning hello world with .end method

  res.end('Server is Running ... Hello World ');
  //NOTE create server only creates, need listen method to activate 
}).listen(8080 , () => {
  console.log("server is running");
}); 


//block scope created by curly braces {}, variables inside function do not leak if use "let/const", var leaks 

//arrow functon does not care who calls it, great for events and listeners
//normal function binds .this keyword to caller


//NOTE HTTP Modules:
//http classes - container for logic 
//CLASSES: http.server --> http.incomingMessage --> http.ServerResponce --> http.Agent --> http.clientRequest

//NOTE HTTP methods:
//request.url --> parsedURL

//NOTE Request Body:
//const body = []
//request.on('data') --> body.push
//body package npm: used to parse request bodies