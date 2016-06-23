'use strict';

var eventEmitter = require('events');


class Greetr extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'hey from greetr constructor in class';
    }
    greet(data){
        console.log(this.greeting + data);
        this.emit('greet', data);
    }
}


Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greeter1 = new Greetr();
greeter1.on('greet', function(){
    console.log('someone greeted from greeter1');
});

greeter1.greet('michal');