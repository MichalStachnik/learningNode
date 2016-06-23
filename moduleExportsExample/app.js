var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

//constructor
var greet4 = require('./greet4');
var greet4 = new greet4();
greet4.greet();


var greet5 = require('./greet5').greet;
greet5();



//var greet = require('./greetings');


//calls the functions in the modules
//greet.english();
//greet.spanish();