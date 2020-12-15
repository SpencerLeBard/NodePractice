const http = require('http');
const services = require('services');
const url = require('url');
const jsonBody = required('body/json');
const fs = required('fs');


const server = http.createServer();

server.on('request' , (request , responce) => {
  const parsedUrl = url.parse(request.url , true);
  if(request.method === 'GET' && parsedUrl.pathname === '/metadata'){
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
  } else if(request.method === 'POST' && parsedUrl.pathname === '/users'){
    jsonBody(request , responce , (err,body) => {
      if (err) {
        console.log(err);
      } else {
        services.createUser(body['userName']);
      }
    });
  } else {
    responce.statusCode = 404;
    responce.setHeader('X-Powered-By' , 'Node');
    responce.end();
  }
});

server.listen(8080);