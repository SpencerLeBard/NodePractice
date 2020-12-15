const http = require('http');

const data = JSON.stringify({
  userName: 'fredv100'
});

const options = {
  hostname: 'localhost' ,
  port: 8080,
  path: '/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const request = http.get(
    'http://www.google.com'
   , (responce) => {
    console.log(`statusCode: ${responce.statusCode}`);
    console.log(responce.headers);

    responce.on('data' , (chunk) => {
      console.log('this is a chunk: \n');
      console.log(chunk.toString());
    });
  }
);

request.on('error' , (err) => {
  console.log(err);
});

request.write(data);

request.end();