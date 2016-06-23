//returns the object constructor
var Emitter = require('./emitter');

//contains 'on' and 'emit' methods
var emtr = new Emitter();
//property on the object
emtr.on('greet', function(){
    console.log('somewhere someone said hello');
});
                //the function that sits inside the array
emtr.on('greet', function(){
    console.log('somewhere someone said hello again');
});

console.log('heyo');
//just finds this property and loops through the array
emtr.emit('greet');