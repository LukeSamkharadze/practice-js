var object = {
    n: 1
};

this.n = 0;

object.method = function(name, callback){
    this[name] = callback;
};

object.method('arrowFunction', () => {
    console.log(`Arrow function ${ this.n }`);
});

object.method('standardFunction', function() {
    console.log(`Standard function ${ this.n }`);
});

object.arrowFunction();
object.standardFunction();
