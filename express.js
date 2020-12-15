const express = require('express');

const server = express();

//NOTE express gives us more advanced features, need custom logic for http modules

server.get('/' , (req, res) => {
  res.send('Hello Express')
})

server.get('/about' , (req, res) => {
  res.send('About ...')
})


server.listen(8080 , () => {
  console.log("Express Server is running ...");
})