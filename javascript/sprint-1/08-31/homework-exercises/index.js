// Exercise 1

let greet = yourName => console.log(`Hello, ${yourName}!`);

greet('John');

// Exercise 2

let multiply = (x, y) => console.log(`The product of ${x} and ${y} is ${x * y}.`);

multiply(3, 4);

// Exercise 3

const person = {
    name: 'John',
    age: 100,
    gender: 'ambiguous',
};

console.log(person);

// Exercise 4

const car = {
    make: 'Cool Car Company',
    model: 'Cool Car Original Ed.',
    year: 2024,
};

console.log(car);

// Exercise 5

let reverseOutput = forwardInput => console.log(forwardInput.split('').reverse().join(''));

reverseOutput('hello there');

// Exercise 6
let calculateArea = r => console.log(`The area of a circle with ${r}u is ${Math.PI * r ** 2}u sq.`);

calculateArea(2);

// Exercise 7
console.log(Date());

// Exercise 8
console.log(Math.random() * 10);

// Exercise 9 Rest in Peace

// Exercise 10
let sentenceMaker = (noun, adj) => console.log(`The ${noun} is ${adj}!`);

sentenceMaker('block', 'green');

// Exercise 11
const user = {
    name: 'John',
    age: '100',
    occupation: 'janitor',
};

const userInfoButton = document.querySelector('.user-info');

userInfoButton.onclick = function() {
    alert(Object.values(user));
}

// Exercise 12
const keysAndValues = [
    { a: 1 },
    { b: 2 },
    { c: 3 },
]

function keyAndValueSeparator(obj) {
    obj.keys = [];
    obj.values = [];
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj.keys.push(key);
            obj.values.push(obj[key]);
        }
    }
    for (let key of obj.keys) {
        delete obj[key];
    }
    console.log(obj.keys);
    console.log(obj.values);
}

keyAndValueSeparator(keysAndValues);

// Exercise 13
let wordReverser = forwardInput => console.log(forwardInput.split('').reverse().join(''));

wordReverser('heladpaskd asodkpasdpokasd');

// Exercise 14
let checkIfBalanced = weirdString => console.log(weirdString);

//checkIfBalanced('(', ')', ', ', '[' and ']');


// Exercise 15

// Exercise 16

function fizzbuzzer() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

fizzbuzzer(100);