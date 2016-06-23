function Greetr(){
    this.greeting = 'Hey world from greet3.js';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();