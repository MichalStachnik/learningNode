var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('hey from the first one');
});

emtr.on(eventConfig.GREET, function(){
    console.log('hey from the second one');
});

console.log('hello');
emtr.emit(eventConfig.GREET);