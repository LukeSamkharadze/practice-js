var module = (function() {
    var name;

    return {
        setName: function(val) {
            name = val;
        },
        getName: function() {
            return name;
        }
    }
})();

module.setName('Pitter');
console.log(module.getName());
console.log(name);
