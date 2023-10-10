// Exercise 1

class Subject {
    observers = []

    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers.filter(subscriber => subscriber !== observer); // filters out passed argument "observer" based on evaluating every iteration of element "subscriber" !== arg "observer"
    }
    notifyObservers() {
        this.observers.forEach(subscriber => subscriber.update()) // for each element, the element's update() method is called
    }
}

class Observer {
    update() {
        console.log(`Observer ${Observer.constructor.name} updated!`);
    }
}

const observer1 = new Observer;
const observer2 = new Observer;
const observer3 = new Observer;

const subject = new Subject;

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notifyObservers();

// Exercise 2

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

function personDeconstructor(obj) {
    console.log(`${obj.name} is ${obj.age}.`)
}

function fruitDeconstructor(obj) {
    console.log(obj[1], obj[3])
}

function addressDeconstructor(obj) {
    console.log(obj.address.city, obj.address.country)
}

personDeconstructor(person);
fruitDeconstructor(fruits);
addressDeconstructor(person);

// Exercise 3

async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    try {

    }
    catch {

    }
}

fetchPosts();

// Exercise 4

class Subject2 extends Subject {
    async fetchAndNotify() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    fetch(url, options)
        .then(response => {
            
            return response.json();
        })
        .then(data => {
             this.observers.forEach(subscriber => subscriber.update(data));
        })
        .catch(error => {
            console.log('uh oh');
        })
    }
}

class Observer2 {
    update(data) {
        try {(console.log(data[0]))}
        catch {console.log('Error!')}
    }
}

const subject2 = new Subject2;

const observer_1 = new Observer2;
const observer_2 = new Observer2;
const observer_3 = new Observer2;

subject2.fetchAndNotify();