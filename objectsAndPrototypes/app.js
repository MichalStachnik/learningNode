var person = {
    firstName: '',
    lastName: '',
    greet: function(){
        return this.firstName + '' + this.lastName;
    }
}


//creating an object of the person prototype
var michal = Object.create(person);
michal.firstName = 'michal';
michal.lastName = 'stachnik';

var maura = Object.create(person);
maura.firstName = 'maura';
maura.lastName = 'simeone';

console.log(michal.greet());
console.log(maura.greet());