//NOTE function wraps every module...

//function (exports, module, require, __filename, __dirname){
// console.log(arguments)
//returns module.exports
//}


//NOTE events

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit("'TEST_EVENT")
});

// myEmitter.emit('TEST_EVENT');


myEmitter.on('TEST-EVENT' , () => {
  console.log('TEST-EVENT was fired');
});

