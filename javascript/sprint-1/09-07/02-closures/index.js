// Closures

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
};

const newFunction = outerFunction('outside');
newFunction();

// I THINK THIS CODE SUCKS FOR UNDERSTANDING CLOSURES
// HERE IS NEW CODE FROM ANOTHER VIDEO THAT EXPLAINS IT BETTER:

let score = function() {
    let points = 0;
    return function() {
        return points += 1;
    }
}(); // Adding () after the curly brackets invokes the function, storing it in memory and making it "real". Known as an IIFE.

console.log(score()); // Returns "1"
console.log(score()); // Returns "2"
console.log(score()); // Returns "3"

// Exercise 1

let counter = function() {
    let count = 0;
    return function() {
        return count += 1;
    }
}();

console.log(counter());
console.log(counter());
console.log(counter());

// Exercise 2

function makeAdder(number1) {
    return function(number2) {
        return number1 + number2;
    }
};

const add2 = makeAdder(2); // Sets number1 to "2"
console.log(add2(2)); // Sets number2 to "2", then evaluates the inner anonymous function.

// Exercise 3

function username_id_generator(init) {
    let username = init;
    let id;
    console.log(`Welcome, ${username}.`);
    return {
        createID: function() {
            id = prompt('Enter a new 4-digit numerical identifier:');
        },
        getUID: function() {
            if (id === undefined) return console.log('Please assign an ID first.');
            else return console.log(`Your UID is ${username}#${id}.`);
        }
    }
};

const uid1 = username_id_generator('bhuinda');
uid1.getUID();
uid1.createID();

const uid2 = username_id_generator('huindab');
uid2.getUID();
uid2.createID();

uid1.getUID();
uid2.getUID();