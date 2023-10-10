// Object Destructuring

// 1.

let person = {
    firstName: 'Benjamin',
    lastName: 'Huinda'
}

let { firstName: fName, lastName: lName } = person; // two new variables, fName and lName, declared by assigning them the values of the keys from the person object.

console.log(fName, lName)

// 2.

let { firstName, lastName, middleName = '' } = person; // assigning a default value is only useful if the property being checked has the possibility of NOT EXISTING in the object.

console.log(firstName)
console.log(lastName)
console.log(middleName) // returns '' because it's not defined in the person object, and hence defaults.

// Array Destructuring

// 1. 

const arr = [1, 2, 3]

let [x, y, z] = arr;

console.log(x, y, z)

// 2.

const arr2 = [1, 2, 3]

let [x2,,z2] = arr2;

console.log(x2, z2)

// 3.

const arr3 = [1, 2, 3, 4, 5]

let [x3, y3, ...z3] = arr3;

console.log(x3, y3, z3)

// Special Cases

function getPerson() {
    return null;
}

let { firstName2, lastName2 } = getPerson() || {}; // using OR {} prevents throwing an error because if the function returns something that isn't iterable, like null, this expression defaults to using {} to iterate over for the declaration.

console.log(firstName2, lastName2);

// ES6 Function Argument Destructuring

let displayFullName = ({firstName, lastName}) => `${firstName} ${lastName}`; // by destructuring args, avoids having to specify context and promotes cleaner code.

console.log(displayFullName(person));

// test

const persons = [
    { firstName: 'Ben', lastName: 'Huinda'},
    { firstName: 'Benny', lastName: 'Boy'}
]

console.log(persons.map(displayFullName));