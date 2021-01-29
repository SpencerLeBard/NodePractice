//class
var EventEmitter = require('events');
//object
var emitter = new EventEmitter(); 

//register listener
emitter.on('message logged' , function(){
  console.log('Listener called');
});

//Raise an event
emitter.emit('message logged')

