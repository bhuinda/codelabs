// Exercise 1. Basic Types
var studentName = 'Benjamin Huinda';
var totalCourses = 5;
console.log(studentName, totalCourses);
// Exercise 2. Arrays & Tuples
var subjects;
var student;
var car = {
    brand: "Toyota",
    speed: 120,
    accelerate: function () {
        console.log("The ".concat(this.brand, " is accelerating"));
    },
    brake: function () {
        console.log("The ".concat(this.brand, " is braking"));
    }
};
car.accelerate();
car.brake();
// Exercise 4. Functions & Types
function greet(name) {
    console.log("Hello, ".concat(name, "!"));
}
// Exercise 5. Classes with TypeScript
var Student = /** @class */ (function () {
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    Student.prototype.displayInfo = function () {
        console.log("".concat(this.studentName, " is ").concat(this.studentAge, " and has grade ").concat(this.studentGrade, "%."));
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        if (this.studentGrade >= gradeThreshold) {
            console.log("".concat(this.studentName, " is passing."));
        }
        else {
            console.log("".concat(this.studentName, " is NOT passing."));
        }
    };
    return Student;
}());
var newStudent = new Student('Benjamin Huinda', 20, 99);
newStudent.displayInfo();
newStudent.isPassing(60);
