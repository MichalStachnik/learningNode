//object properties and methods
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays
var array = [];
array.push(function(){
    console.log('hey world 1');
});
array.push(function(){
    console.log('hey world 2');
});
array.push(function(){
    console.log('hey world 3');
});

array.forEach(function(item){
    item();
});