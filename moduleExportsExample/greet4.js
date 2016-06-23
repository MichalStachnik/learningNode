function Greetr(){
    this.greeting = 'hey world from greet4.js';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//instead of giving back a new object like in 3, im giving the ability to create a new object
module.exports = Greetr;