// Exercise 1

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();

// innerFunction() can access outerVar because of closure + functional scoping, while it can access innerVar because of local scoping.

// Exercise 2

function mainFunction() {
    return hoistedFunction();
    function hoistedFunction() {
        console.log('hi');
    }
}

mainFunction();

// hoistedFunction, as implied, is hoisted so that mainFunction parses with no issues.

// Exercise 3

function closureFunction() {
    let closureVar = 'hi there';
    return function() {
        console.log(closureVar);
    }
}

const newFunction = closureFunction();
newFunction();

// Exercise 4

let globalVar = 'test';

function modifier() {
    globalVar = 'hi';
}

function localVariable() {
    let globalVar = 'localVariable';
}

modifier();
localVariable();

console.log(globalVar);

// modifier() overrides the value of the globally-scoped reference globalVar.

// Exercise 5

let acceptParam = function(init) {
    let message = init;
    return function() {
        console.log(message);
    }
}('hi');

acceptParam();

// Exercise 6

// console.log(testVar);
// console.log(testVar2);
// console.log(testVar3);

// var testVar = 'test';
// let testVar2 = 'testt';
// const testVar3 = 'testtt';

// var's declaration is hoisted but let and const are not hoisted at all. 

// Exercise 7

function counterFunction(init) {
    let counter = init;
    return function() {
        counter = counter + 1;
        console.log(counter);
    }
};

const count = counterFunction(0);
count();
count();

// Exercise 8

let neoCounterFunction = function(init) {
    let counter = init;
    return function() {
        if(counter == 10) counter = 0;
        else counter ++;
        return counter;
    }
}(0);

for(i = 0; i < 12; i++) {
    console.log(neoCounterFunction());
}

// Exercise 9

let globalVariable = 'test';

let globalFunctionModder = function() {
    globalVariable = 'test2';
    console.log(globalVariable);
}();

let localFunctionModder = function() {
    let localVariablee = 'test';
    localVariablee = 'test3'; // has to be under declaration or else gets error
    console.log(localVariablee);
}();

globalFunctionModder = function(init) {
    outerVariable = init;
    return function() {
        console.log(outerVariable);
    }
}('test4');

globalFunctionModder();

// As demonstrated by the IIFE ('test4'), I store a value inside the outer function-scoped outerVariable in globalFunctionModder. When I call globalFunctionModder again, the closure function runs and returns 'test4' from the outer-scoped value.

// Exercise ???

function favoriteNumberProcessor(input) {
    let favNum = input;
    if(true) {
        message = `Your favorite number is ${favNum}.`
        return {
            changeNum: function(input) {
                favNum = input;
                return console.log(message);
            },
            correctNum: function() {
                favNum = 7;
                return console.log(`Your favorite number is ${favNum}.`);
            },
            randomNum: function() {
                favNum = favNum * (Math.floor(Math.random() * 100));
                return console.log(`Your favorite number is ${favNum}.`);
            }
        }
    }
}

const processor = favoriteNumberProcessor(8);
processor.changeNum(2);
processor.correctNum();
processor.randomNum();