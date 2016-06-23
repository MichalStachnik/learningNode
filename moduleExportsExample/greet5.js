var greet5 = 'hey world from greet5.js';

function greet(){
    console.log(greet5);
}


//won't have access to the greet5 variable outside this module
module.exports = {
    greet: greet
}