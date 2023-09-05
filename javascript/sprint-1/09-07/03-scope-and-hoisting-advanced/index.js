// JavaScript Concepts Mastery: Scope and Hoisting

// Exercise 1

let var1 = 'test';

if(true) {
    let var2 = 'test';
};

function functionScope() {
    let var3 = 'test';
}

function scopeTest() {
    console.log(var1); // Executes; globally scoped.
    console.log(var2); // Does not execute; block scoped.
    console.log(var3); // Does not execute; functionally scoped.
};

scopeTest();

// Exercise 2

// var var4 = 'test';

function hoistingTest() {
    console.log(var4); // Executes; if var4 is declared after the function, it uniquely returns "undefined". If declared before, it returns "test" because it also initializes the value before the function is invoked.
    console.log(var5); // Does not execute; throws an exception because let is not hoisted.
    console.log(var6); // Does not execute; throws an exception because const is not hoisted.
};

hoistingTest();

var var4 = 'test';
let var5 = 'test';
let var6 = 'test';

// Exercise 3

// const message = prompt('Input a message:');
// const tester = hoistChallenge(message);

if(true) {
    function hoistChallenge(input) { // Can be accessed outside the "if" block but only if called after it's declared. Does not naturally hoist to the top because it's nested inside a block.
        console.log(input); // Executes only if "message" and "tester" are defined after the block.
    };
}

// const message = prompt('Input a message:');
// const tester = hoistChallenge(message);