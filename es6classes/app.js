'use strict';

class person{
    constructor(firstname, lastname){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    greet(){
        console.log('hello ' + this.firstName + ' ' + this.lastName);
    }
}

//creating an object of the person prototype
var michal = new person('michal', 's');
michal.greet();

var maura = new person('maura', 's');
maura.greet();