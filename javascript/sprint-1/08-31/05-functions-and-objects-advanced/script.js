// Exercises: Mastering Functions and Objects in JavaScript

// Exercise 1

let checkName = prompt('Enter a name: ');
validName = ['ben', 'benjamin']

function greetUser (){
    if (validName.includes(checkName.toLowerCase())){
        alert('Yo dawg');
    }
    else{
        alert('Nah dawg');
        return;
    }
}

greetUser();

// Exercise 2

let x = 2;
let y = 3;

function someMath (){
    return x + y;
}

let someMath = (x, y) => x + y + 1;

alert(someMath(10, 11));

// Exercise 3

let findRectangleArea = (l, b) => {
    let area = l * b;
    return (`The area of a rectangle with length ${l}u and breadth ${b}u is ${area}u^2.`)
}
alert(findRectangleArea(2, 2))

// Exercise 4

const studentInfo = {
    firstName: 'benjamin',
    lastName: 'huinda',
    age: 20,
    grade: 13,
    getStudentInfo: function (){
        let fullName = this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) + ' ' + this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
        return (`${fullName} is ${this.age} years old and is in grade ${this.grade}.`)
    }
}

alert(studentInfo.getStudentInfo());

// Exercise 5

// const library = {
//     books: [],
//     addBook: function (){
//         const bookName = prompt('Enter book title to add: ');
//         const storedBookName = bookName.toLowerCase();
//         this.books.push(storedBookName);
//     },
//     removeBook: function (){
//         const bookName = prompt('Enter book to remove: ');
//         const storedBookName = bookName.toLowerCase();
//         const index = this.books.indexOf(storedBookName);
//         if (index !== -1) {
//             this.books.splice(index, 1);
//             alert('Book successfully removed.')
//         } else {
//             alert('Book not found.')
//         }
//     }
// }

const library = {
    bookList: ['test'],
    showBookList: function() {
        alert(this.bookList);
    },
    modifyBookList: function() {
        optionSelector = prompt('\"1\" to add a book, \"2\" to remove a book.');
        if (optionSelector === '1') {
            bookName = prompt('Specify book: ');
            this.bookList.push(bookName);
            alert(`${bookName} has been added to your book list.`);
        } else if (optionSelector === '2') {
            while (true){
                bookName = prompt('Specify book: ');
                const index = this.bookList.indexOf(bookName);
                if (index !== -1) {
                    this.bookList.splice(index, 1);
                    alert(`${bookName} successfully removed.`)
                    break;
                }
                else {
                    alert(`${bookName} was not found.`)
                    break;
                }
            }   
        } else {
            alert('Invalid input.');
        }
    }
}

// const modifyButton = document.querySelector('.modify-button');

// modifyButton.onclick = library.modifyBookList;

// const showListButton = document.querySelector('.show-list-button');

// showListButton.onclick = library.showBookList;

const modifyButton = document.querySelector('.modify-button');

modifyButton.onclick = function() {
    library.modifyBookList.call(library); // Explicitly set the context
};

const showListButton = document.querySelector('.show-list-button');

showListButton.onclick = function() {
    library.showBookList.call(library); // Explicitly set the context
};