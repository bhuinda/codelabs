class Subject {
    observers = [] // no constructor required

    subscribe(observer) { // adds observer to list "observers"
        this.observers.push(observer); // adding fn as a parameter allows for a function to run once push() completes.
    }

    unsubscribe(fn) { // removes observe from list "observers"
        let index = this.observers.indexOf(fn);
        this.observers.splice(index, 1);
    }

    notify() { // broadcasts that change has been made to subscribers from list "observers"
        this.observers.forEach((observer) => {observer()});
    }
}

// create subject (class Subject) instantiated
const subject = new Subject;

// create observer
const observer = () => {
    console.log('Hi, it\'s the observer talking!');
}

// subscribes observer to subject
subject.subscribe(observer);
subject.notify();
subject.unsubscribe(observer);

class ShoppingCartSubject {
    subscribers = [];
    items = [];

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.observers.filter(subscriber => subscriber !== observer);
    }

    notify() {
        this.subscribers.forEach(subscriber => subscriber(this.items))
    }
}

const shoppingCartSubject = new ShoppingCartSubject;

// observer - dealing with the cart number in the header

const observerCart = (items) => {
    console.log('Update cart');
    document.getElementById('header-cart').innerText = `Cart (${items.length})`
}

// observer - dealing with the pop-up notification

const observerPopUpNotification = () => {
    
    console.log("Update pop-up notification");
    const popUpElement = document.getElementById("pop-up");

    popUpElement.innerText = `You have added ${items[items.length-1]}`;
    popUpElement.style.display = "block";

    setTimeout(() => {
        popUpElement.style.display = "none";
    }, 2000);
}

shoppingCartSubject.subscribe(observerCart);
shoppingCartSubject.subscribe(observerPopUpNotification);

shoppingCartSubject.push();