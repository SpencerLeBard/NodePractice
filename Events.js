const event = require('events');
const eventEmitter = new event.EventEmitter();
const express = require('express')
const server = express();

// emit() = publish , on() = listen , once() = discarded after one event , addListener() = same an on()
// set() = application level event
server.set('eventEmitter' , eventEmitter)

//listen
eventEmitter.on('myEvent' , () => {
  console.log("event heard");
})

//publish
eventEmitter.emit('myEvent')


//NOTE order
// eventEmitter.on('myEvent', (data) => {
//   console.log(data, '- FIRST');
// });

// console.log('Statement A');

// eventEmitter.on("myEvent", data => {
//   console.log(data, '- SECOND');
// });

// eventEmitter.emit('myEvent', 'Emitted Statement');

// console.log("Statement B");