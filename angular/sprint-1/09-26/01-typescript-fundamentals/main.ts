// 1. Base Types and Primitives

import { StringLiteral } from "typescript";

// Primitive Types

let isNum: number = 1;

let isStr: string = 'string';

let isBool: boolean = true;

let isNull: null;

let isUndef: undefined;

// Complex Types

let isNumArray: number[];

let isStrArray: string[];

let isBoolArray: boolean[];

let isObj: {
    isStr: string;
    isNum: number;
};

let person: {
    name: string;
    age: number;
};

let pluralPersons: {
    name: string;
    age: number;
}[]; // {}[] declares an array of objects with types within

// 2. Type Inference

let course = 'React -- The Complete Guide'

//course = 12345; // Shows an error because TypeScript infers the value of variable "course" during its declaration, despite not explicitly setting a type.

// 3. Union Types

let example: string | number | boolean | null | undefined | [] | {} | {}[];

let exampleTwo: string | string[] = 'hi';

// 4. Type Aliases

type Person = {
    name: string;
    age: number;
}; // semicolon necessary because it's a declarative statement, I think(?)

let person2: Person;


// 5. Functions and Function Types

function add(a: number, b: number) {
    return a + b; // infers that return value should be type: number
}

// FORMAT for FUNC TYPES --- function name(p1: explicit type, p2: explicit type, ...): explicit type {}

function printOutput(value: any) {
    console.log(value); // special return type called "void" (like how C functions normally return void)
}

// 6. Generics

function normalInsertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
} // returns a new array with type: any that doesn't mutate any inputs; it's a pure utility function

const demoArray = [1, 2, 3];

const updatedArray = normalInsertAtBeginning(demoArray, 0); // [-1, 1, 2, 3]; THIS ARRAY HAS TYPE: ANY BECAUSE THAT'S WHAT THE FUNCTION RETURNS. SOLVED WITH GENERICS FEATURE, WHICH INFERS ARGUMENT'S TYPE WHEN PASSED INTO FUNCTION USING <Type> SYNTAX AFTER FUNCTION NAME.

function genericInsertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

// FORMAT for GENERIC --- function name<Type/T>(p1: <Type/T>, p2: <Type/T>, ...) {}

// 7. TypeScript Classes

class Student {

    constructor( // Shorthand constructor syntax
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ){}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student('Benjamin', 'Huinda', 20, ['Code Labs']);
student.enroll('Angular'); // student.courses = ['Code Labs', 'Angular']

// Public properties can be accessed from outside a class using dot notation; private can only be accessed from inside the class, for example by calling a public method that itself calls the private method or uses the private property.

// TS interfaces won't be compiled to JS.

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 10,

    greet() {
        console.log('Hello!');
    }
}

class Instructor implements Human {
    firstName: string;
    age: number;

    constructor(first: string, age: number) {
        this.firstName = first;
        this.age = age;
    }

    greet() {}
}

// In classes, interfaces are valuable, especially in collaborative settings, because by using the "implement" keyword followed by the desired interface, the class must strictly adhere to the structure of that interface.

// Type aliases and interfaces are very similar; they can accomplish the same thing and are therefore interchangeable, however type aliases cannot be changed down the road, while interfaces can be extended freely.