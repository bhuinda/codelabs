// Exercise 1
console.log('Hello world!');

// Exercise 2
let firstName = 'Ben';
console.log(firstName);

// Exercise 3
let width = 5;
let height = 10;
console.log('The rectangle\'s area is: ' + (width * height) + ' sq u.');

// Exercise 4
let x = 5;
if ((x % 2) > 0) {
    console.log(`${x} is odd.`);
} else {
    console.log(`${x} is even.`);
}

// Exercise 5
for (i = 0; i <= 10; i++){
    console.log(i);
}

// Exercise 6
// const fullName = prompt('Enter your name: ');
// alert(`Welcome, ${fullName}!`);

// Exercise 7
// const y = prompt('Enter a number to see its factorial: ');

// function factorial(y){
//     if (y < 0) {
//         return -1;
//     } if (y == 0) {
//         return 1;
//     } else {
//         return y * factorial(y - 1);
//     }
// }

// alert(`${y}\'s factorial is: ${factorial(y)}.`);

// Exercise 8
// const year = prompt('Enter a year: ');
// if (year % 4 > 0){
//     alert(`${year} is not a leap year.`)
// }
// else{
//     alert(`${year} is a leap year.`)
// }

// Exercise 9
let sum = 0;
let j = 1;
while (j <= 100){
    sum += j;
    j++;
}

console.log(`The sum of all numbers 1-100 is: ${sum}`);

Exercise 10
const number1 = prompt('Enter 1st number: ');
const number2 = prompt('Enter 2nd number: ');

const convertedNumber1 = parseInt(number1);
const convertedNumber2 = parseInt(number2);

console.log(convertedNumber1 + convertedNumber2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

// Exercise 11

// const stringVal = "string";
// const numberVal = 10;
// const booleanVal = true;
// const nullVal = null;
// const undefinedVal = undefined;
// const objectInstance = {key: key};
// const arrayInstance = [1, true, "3"];
// let noDefault;

// Exercise 12

const groceries = [
    { name: "Lettuce", price: 10 },
    { name: "Bread", price: 2 },
    { name: "Turkey", price: 3 },
];

const groceriesList = document.getElementById("groceries-list");

groceries.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    groceriesList.appendChild(li);
});



// for (i = 0; i <= groceries; i++){
//     newGrocery.appendChild(document.createTextNode('test'));
//     document.querySelector('ul').appendChild(newGrocery);
// }