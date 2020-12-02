const Person = (function() {
	const privateData = new WeakMap();

	function Person(name) {
		privateData.set(this, { name });
	}

	Person.prototype.getName = function() {
		return privateData.get(this).name;
	};

	Person.prototype.getData = function() {
		return privateData;
	};

	return Person;
})();

const john = new Person('John');

console.log(john);
console.log(john.getName());
console.log(john.getData().get(john));

const john2 = new Person('John2');

console.log(john2);
console.log(john2.getName());
console.log(john2.getData().get(john));
