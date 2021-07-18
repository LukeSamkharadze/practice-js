const data = {
    n: 1,
    a: 'a',
    toJSON() {
        return {
            "value": this.n
        }
    }
};

console.log(JSON.stringify(data));