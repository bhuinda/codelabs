// Class 3
// Exercise 1
console.log('Hello, world!');
// Exercise 2
var firstName = 'Benjamin Huinda';
console.log(firstName);
// Exercise 3
var width = 5;
var height = 5;
console.log(width * height);
// Exercise 4
var number = 9;
if (number % 2 == 0) {
    console.log('Even');
}
else {
    console.log('Odd');
}
// Exercise 5
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// Exercise 6
var fullName = prompt('Enter your name: ');
alert("Hello, ".concat(fullName, "!"));
// Exercise 7
var factorial = 10;
var factorial_total = 1;
for (var i = 0; i < factorial; i++) {
    factorial_total *= i;
}
console.log(factorial_total);
// Exercise 8
var year = 2004;
if (year % 4 == 0) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a leap year."));
}
// Exercise 9
while (true) {
    var sum = 0;
    for (var i = 0; i < 100; i++) {
        sum += i;
    }
    console.log(sum);
    break;
}
// Exercise 10
var num1 = Number(prompt('Enter a number: '));
var num2 = Number(prompt('Enter a second number: '));
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// Exercise 11
// No
// Exercise 12
var objList = [{ name: 'Bob', price: 1 }, { name: 'Joe', price: 2 }];
// Exercise 13
function arrayOfMultiples(num, length) {
    var array = [];
    for (var _i = 0, length_1 = length; _i < length_1.length; _i++) {
        var i = length_1[_i];
        array.push[num * i];
    }
    return array;
}
console.log(arrayOfMultiples(5, 6));
// Exercise 14
function checkSign(n) {
    if (n > 0)
        return 'Positive';
    else if (n < 0)
        return 'Negative';
    else
        return 'Zero';
}
console.log(checkSign(1));
// Exercise 15
function multTable(n) {
    var multTable = [];
    for (var i = 0; i < 10; i++)
        multTable.push(n * i);
}
// Exercise 16
function checkPrime(n) {
    var isPrime = true;
    if (n == 1) {
        isPrime = false;
    }
    else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime == true) {
        console.log("".concat(n, " is prime."));
    }
    else
        console.log("".concat(n, " is not prime."));
}
checkPrime(7);