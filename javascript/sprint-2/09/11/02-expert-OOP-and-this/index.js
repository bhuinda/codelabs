// 1. Diving into Classes

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayInfo() {
        console.log(this.make, this.model, this.year)
    }
}

const newCar = new Car('Honda', 'Civic', '2012') // newCar creates a new copy of class 'Car' that fills in the Car template by passing arguments to the Car constructor
newCar.displayInfo();

// 2. Understanding 'this' in Depth

const obj = {
    key: 'value',
    func() {
        console.log(this.key); // returns 'obj.key' because 'this' inherits the context of 'obj'
    },
}

obj.func();

const obj2 = {
    key: 'value',
    func: () => {
        return this.key; // returns 'undefined' because an arrow function looks for a function it's enclosed within to provide context for 'this', and because there is none, it has no inherited context
    },
    func2: function() {
        return this.key;
    }
}

const unbounded = obj2.func2.bind(); // returns 'undefined' because no binding is passed to obj.func2
console.log(unbounded());

const bounded = obj2.func2.bind(obj2);
console.log(bounded());

// 3. Practical OOP Scenarios

class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    displayInfo() {
        console.log(this.make, this.model, this.year, this.batteryLife)
    }
}

const newCar2 = new ElectricCar('Honda', 'Electric Civic', '2022', '10 hours');
newCar2.displayInfo();

// 4. Challenges

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getStudentInfo() {
        console.log(this.name, this.age, this.grade);
    }
}

const student = new Student('Benjamin Huinda', '18', 'Senior');
student.getStudentInfo();

class Test {
    constructor(thisss) {
        this.thisss = thisss;
    }
    getThisssBad = () => {
        console.log(this.thisss);
    }
    getThisssGood() {
        console.log(this.thisss);
    }
}

const tester = new Test('this');
tester.getThisssBad(); // works because getThisssBad is lexically-scoped to the constructor function
tester.getThisssGood(); // works as expected

const test = {
    thisss: 'this',
    getThisssBad: () => {
        console.log(this.thisss);
    },
    getThisssGood() {
        console.log(this.thisss);
    },
}

test.getThisssBad(); // returns 'undefined' as expected
test.getThisssBad.bind(test); // returns 'this' because it is bound to obj 'test'
test.getThisssGood(); // returns 'this' as expected