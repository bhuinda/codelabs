// #39 Understanding JS Scope
// Exercise 1

const firstName = 'John';
const lastName = 'Smith';
const age = '25';

function johnSmith() {
    console.log(`${firstName} ${lastName} is ${age} years old.`)
};
johnSmith();

// Exercise 2
let smithJohn = (firstName, lastName, age, country) => console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}.`);
smithJohn('Smith','John','25', 'England');

// Exercise 3 -- The problem is that the function still executes with the name Smith because firstName in the global scope (James) is a separate reference.

// Exercise 4
let game = 'Sonic';

if(true) {
    let game = 'Mario';
    console.log(game);
}

console.log(game);

// The code will log 'Mario' and then log 'Sonic', because, again, the game variables are assigned to separate references because of their scopes.

// #40 Understanding JS Hoisting
// Exercise 1

book('The Magician\'s Nephew');

function book(title) {
    console.log(`The book is called ${title}`);
}

// The code will log "The book is called The Magician's Nephew" because the function declaration is hoisted to the top.

// Exercise 2

// console.log(book2);

// let book2 = 'The Silver Chair';

// The code will throw an exception error because the book function is being initialized, not declared. To fix, "let book" would have to change to "function book()" so that it's properly hoisted.

// Extra Exercises

// Example of Var Advantage

console.log(greeting);

var greeting = 'hi';

// Does not throw an exception, instead returning "undefined" because variable "greeting" has been declared and hoisted, but its initialized value "hi" is not hoisted. "let" and "const" are treated strictly as initializations and thus would throw an exception.