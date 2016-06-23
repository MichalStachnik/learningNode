function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    //create a new property on the object, make sure it is an array
    this.events[type] = this.events[type] || [];
    //add functions into that array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    //if i have that property on the object
    if(this.events[type]){
        //i will take that property which will be an array and loop over the array and execute the function
        this.events[type].forEach(function(listener){
            listener();
        })
    }
}

module.exports = Emitter;