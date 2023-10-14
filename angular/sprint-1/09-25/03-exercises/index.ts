// Class 3

// Exercise 1

console.log('Hello, world!');

// Exercise 2

let firstName: string = 'Benjamin Huinda';
console.log(firstName);

// Exercise 3

let width: number = 5;
let height: number = 5;

console.log(width * height);

// Exercise 4

let number: number = 9;

if (number % 2 == 0) { console.log('Even') }
else { console.log('Odd') }

// Exercise 5

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Exercise 6

const fullName = prompt('Enter your name: ');
alert(`Hello, ${fullName}!`);

// Exercise 7

let factorial = 10;
let factorial_total = 1;

for (let i = 0; i < factorial; i++) {
    factorial_total *= i;
}

console.log(factorial_total);

// Exercise 8

let year = 2004;

if (year % 4 == 0) { console.log(`${year} is a leap year.`)}
else { console.log(`${year} is not a leap year.`)}

// Exercise 9

while(true) {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    console.log(sum);
    break;
}

// Exercise 10

const num1 = Number(prompt('Enter a number: '));
const num2 = Number(prompt('Enter a second number: '));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Exercise 11

// No

// Exercise 12

const objList: {name: string, price: number}[] = [ {name: 'Bob', price: 1}, {name: 'Joe', price: 2} ];

// Exercise 13

function arrayOfMultiples(num, length) {
    const array = [];
    for (let i of length) {
        array.push[num * i];
    }
    return array;
}

console.log(arrayOfMultiples(5, 6));

// Exercise 14

function checkSign(n: number) {
    if (n > 0) return 'Positive'
    else if (n < 0) return 'Negative'
    else return 'Zero'
}

console.log(checkSign(1));

// Exercise 15

function multTable(n: number) {
    let multTable: number[] = [];
    for (let i = 0; i < 10; i++)
        multTable.push(n * i);
}

// Exercise 16

function checkPrime(n: number) {
    let isPrime = true;

    if (n == 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i < n; i ++) {
            if (n % i == 0) { 
                isPrime = false
                break;
            }
        }
    }

    if (isPrime == true) { console.log(`${n} is prime.`)}
    else console.log(`${n} is not prime.`)
}

checkPrime(7);