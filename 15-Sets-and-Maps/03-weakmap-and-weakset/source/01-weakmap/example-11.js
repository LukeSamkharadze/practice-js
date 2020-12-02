const Person = (function() {
	const privateData = {};
	let privateId = 0;

	function Person(name) {
		Object.defineProperty(this, '_id', { value: privateId++ });

		privateData[this._id] = {
			name
		};
	}

	Person.prototype.getName = function() {
		return privateData[this._id].name;
	};

	Person.prototype.getData = function() {
		return privateData;
	};

	return Person;
})();

const john = new Person('John');

console.log(john);
console.log(john.getName());
console.log(john.getData());

const john2 = new Person('John2');

console.log(john2);
console.log(john2.getName());
console.log(john2.getData());
