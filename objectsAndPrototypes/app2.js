function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

person.prototype.greet = function(){
    console.log('hello ' + this.firstName + ' ' + this.lastName);
}

//creating an object of the person prototype
var michal = new person('michal', 's');
michal.greet();

var maura = new person('maura', 's');
maura.greet();

