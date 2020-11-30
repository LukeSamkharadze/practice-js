class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  getArea() {
    return `${super.getArea()} units`;
  }
}

const square = new Square(3);

console.log(square.getArea()); // 9 units
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
