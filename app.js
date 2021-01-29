//require is built in fuctiuon manages dependancys of program (libraries), modules 
const http = require('http');

//creates server conatant by invoking createServer function on http module api
//accepts arguments that is request listener function
//req = request object, type: incomingMessage 
//res = response object, type: serverResponse
//res/req both streams 

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.end('Server is Running ... Hello World ');
  //NOTE create server only creates, need listen method to activate 
}).listen(8080 , () => {
  console.log("server is running");
}); 


//NOTE HTTP Modules:
//http classes - container for logic 
//CLASSES: http.server --> http.incomingMessage --> http.ServerResponce --> http.Agent --> http.clientRequest
