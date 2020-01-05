/*
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) result *= x;
    return result;
}
*/

/*
let calculator = {
    a: 0,
    b: 0,
    res: 0,

    read() {
        this.a = +prompt("Enter first digit", 0);
        this.b = +prompt("Enter second digit", 0);
    },

    sum() {
        this.res = this.a + this.b;
    },

    getState() {
        return this.res;
    }
}

calculator.read();
calculator.sum();
console.log(calculator.getState());
*/

/*
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        console.log(this.step);
    }
};

ladder.step = 100;
ladder.up().up().up().down();
ladder.showStep();
*/

/*
let obj = {};

function A() { return 1; }

function B() { return 1; }

let a = new A;
let b = new B;

console.log(a == b);
*/

class Accumulator {

    constructor(startingValue) {
        this.value = +startingValue;
    }


    read() {
        let x = +prompt("x?", 0);
        this.value += x;
    }
}

let acc = new Accumulator("22");

acc.read();

console.log(acc.value);
