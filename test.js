class Food {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `name -> ${this.name}`;
    }
}

class IndiaFood extends Food {
    // constructor(name) {
    //     super(name);
    //     this.name;
    // }
    toString() {
        return `name -->> ${this.name}`;
    }
}




const f = new IndiaFood("Biryani");
console.log(f.toString());


console.log(typeof new Object()); // "object"
console.log(Object());

const foo = { status: 'foobar' };
console.log(foo);

const tootsie_roll = new Food('Tootsie Roll', 0, 26, 0);

Object.getPrototypeOf(tootsie_roll) === Food.prototype; // true
tootsie_roll.constructor === Food; // true