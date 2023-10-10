// Spread operator (...) is extremely versatile and is used to deconstruct or reformat information.

// Using ... on iterables

console.log( Math.min(...[1, 2, 3]) ) // ... "spreads" out the array into a list of arguments, circumventing a NaN result because it has deconstructed the array.

const arrayOfStrings = ["Big", "Brown", "Cow"];

console.log(arrayOfStrings)
console.log(...arrayOfStrings) // deconstructs array into args again, which the console.log method concatenates into a single string output.

// Combining Arrays

const dogs = ["Princess", "Turbo Deatheater"];
const cats = ["Snow Globe", "2 Cent", "Meatball"];
const pets = [...dogs,...cats]

console.log(pets)

// Avoiding Pointing to Same Array Reference

const original = ["Mona Lisa", "American Gothic", "etc"]
const copy = original;

copy.push('One more')

console.log(original) // 'One more' does show up
console.log(copy) // 'One more' does show up

// v2

const originals = ["Mona Lisa", "American Gothic", "etc"];
const copies = [...originals] // ... creates a new array instead of pointing to

copies.push('One more')

console.log(originals) // 'One more' does NOT show up
console.log(copies) // 'One more' does show up

// Object Literal example

const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle }

console.log(hybrid)

// In a word, the spread operator's chief use is to avoid MUTATING data. It does not affect values it is associated with, instead creating a carbon copy of said values to work with, which is infinitely useful for preserving information.

    // As an example, you can preserve a "history" of versions of an object using ... so that in the future, if you need to revert to an earlier version, you can easily do so because the original object and its successors were never mutated, only copied using the spread operator.