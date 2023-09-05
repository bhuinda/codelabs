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
const keysAndValues = {
    a: 1,
    b: 2,
    c: 3,
}

function keyAndValueSeparator(obj) {
    keysArray = [];
    valuesArray = [];
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keysArray.push(key);
            valuesArray.push(obj[key]);
        }
    }

    console.log(keysArray);
    console.log(valuesArray);
}

keyAndValueSeparator(keysAndValues);

// Exercise 13
let wordReverser = forwardInput => console.log(forwardInput.split('').reverse().join(''));

wordReverser('This is backwards.');

// Exercise 14

function checkIfBalanced(weirdString) {
    let stack = [];
  
    for (let i of weirdString) {
      if (i == '(' || i == '[' || i == '{') {
        stack.push(i);
      } else if (i == ')' || i == ']' || i == '}') {
        if (stack.length === 0) {
          return false;
        }
        let check = stack.pop();
        if (
          (i === ')' && check !== '(') ||
          (i === ']' && check !== '[') ||
          (i === '}' && check !== '{')
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

if (checkIfBalanced(prompt('Enter a string of parantheses to check if balanced:'))) console.log('Balanced');
else console.log ('Not balanced');


// Exercise 15

// THIS WORKS AS WELL
// function checkIfAnagram(str1, str2) {
//     const array1 = str1.split('');
//     const array2 = str2.split('');
//     if (array1.length !== array2.length) {
//         console.log(`${str1} and ${str2} are not anagrams.`);
//     } else {
//         if (array1.every((element) => array2.includes(element))) {
//             console.log(`${str1} and ${str2} are anagrams.`);
//         } else {
//             console.log(`${str1} and ${str2} are not anagrams.`);
//         }
//     }
// }

function checkIfAnagram(str1,str2) {
    const arr1 = str1.split('');
    const arr2 = str2.split('');
    if (arr1.length === arr2.length && arr1.every((element) => arr2.includes(element))) {
        console.log(`${str1} and ${str2} are anagrams.`);
    } else {
        console.log(`${str1} and ${str2} are not anagrams.`);
    }
};

checkIfAnagram('silent','listen');

// Exercise 16

function fizzbuzzer(n = 100) {
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

console.groupCollapsed('Fizzbuzzer');
fizzbuzzer();
console.groupEnd();

// Exercise 17

function checkIfPalindrome(input) {
    const cleanedString = input.replace(/\s/g,'').toLowerCase();
    const cleanedStringReversed = cleanedString.split('').reverse().join('');
    if (cleanedString !== cleanedStringReversed) {
            console.log(`${input} is not a palindrome.`);
        }
    console.log(`${input} is a palindrome.`);
}

checkIfPalindrome('racecar');

// Exercise 18 is same as 13???