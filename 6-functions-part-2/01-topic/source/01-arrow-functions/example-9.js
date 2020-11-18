const data = {
    value: 0,
    getValue: function () {
        return () => this.value;
    },
    getValue2: function () {
        return function () {
            return this.value;
        }
    }
};

console.log(data.getValue()());
console.log(data.getValue2()());
console.log('----------------------');

const newData = {
    value: 1
};

const f1 = data.getValue().bind(newData);
const f2 = data.getValue2().bind(newData);

console.log(f1());
console.log(f2());
