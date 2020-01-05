// function numberGenerator() {
//     // Local “free” variable that ends up within the closure
//     let num = 1;

//     function checkNumber() {
//         console.log(num);
//     }
//     num++;

//     return checkNumber;
// }

// let number = numberGenerator();
// number();

// let number1 = numberGenerator();
// number1();


// Double protected const :-)
function sayHello() {
    // Local variable that ends up within the closure
    const hello = 'Hello, world!';

    return function() {
        return hello;
    };
}

const sayHelloFromClosure = sayHello()();
//sayHelloClosure(); // ‘Hello, world!’
console.error(sayHelloFromClosure)