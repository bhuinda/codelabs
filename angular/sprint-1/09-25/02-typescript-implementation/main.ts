// Exercise 1. Basic Types

let studentName: string = 'Benjamin Huinda';
let totalCourses: number = 5;

console.log(studentName, totalCourses);

// Exercise 2. Arrays & Tuples

let subjects: string[];
let student: [name: string, age: number];

// Exercise 3. Interfaces

interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake(): void;
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(): void {
        console.log(`The ${this.brand} is braking`);
    }
}

car.accelerate();
car.brake();

// Exercise 4. Functions & Types

function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

// Exercise 5. Classes with TypeScript

class Student {
    constructor(
        private studentName: string,
        private studentAge: number,
        private studentGrade: number
    ){}

    displayInfo() {
        console.log(`${this.studentName} is ${this.studentAge} and has grade ${this.studentGrade}%.`);
    }

    isPassing(gradeThreshold: number) {
        if (this.studentGrade >= gradeThreshold) { console.log(`${this.studentName} is passing.`) }
        else { console.log(`${this.studentName} is NOT passing.`) }
    }
}

let newStudent = new Student('Benjamin Huinda', 20, 99);
newStudent.displayInfo();
newStudent.isPassing(60);