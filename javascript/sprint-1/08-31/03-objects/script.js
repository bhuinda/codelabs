// Understanding and Utilizing Objects in JavaScript

const book = {
    title: 'title',
    author: 'firstname lastname',
    publish_date: '01/01/2023',
    genre: 'fiction',
};

function addProperty (){
    book.dummy_property = 30;
};

function modifyProperty (){
    book.title = 'new_title';
};

function removeProperty (){
    delete book.genre;
};

console.log(book);

addProperty ();
modifyProperty();
removeProperty();

console.log(book);