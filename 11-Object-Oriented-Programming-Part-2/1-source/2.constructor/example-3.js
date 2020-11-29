function Rabbit(name) {
    this.name = name;
    console.log(this.name);
}

const r2 = new Rabbit('Marcus');

const rabbit2 = new Rabbit.constructor('Lisa');