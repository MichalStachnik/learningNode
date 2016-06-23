var eventEmitter = require('events');
var util = require('util');

function Greetr(){
    //makes sure it has all the property and methods that it should
    eventEmitter.call(this);
    this.greeting = 'hey from greetr constructor';
}

util.inherits(Greetr, eventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr();
greeter1.on('greet', function(){
    console.log('someone greeted from greeter1');
});

greeter1.greet();