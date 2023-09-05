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