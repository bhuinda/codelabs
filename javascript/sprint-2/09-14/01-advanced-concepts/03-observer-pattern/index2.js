// Using Classes

class Observable {
    constructor(){
        this.subscribers = [];
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter(item => item != fn);
    }

    broadcast(data) {
        for(let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i](data);
        }
    }
}

const observer = new Observable();

const fn = (data) => {
    console.log('Callback was executed with data', data);
};

observer.subscribe(fn);

observer.broadcast('Hello from the observable.');

// Using Functions

function createObservable() {
    return {
        subscribers: [],

        subscribe(fn) {
            this.subscribers.push(fn);
        },
    
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter(item => item != fn);
        },
    
        broadcast(data) {
            for(let i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i](data);
            }
        },
    };  
}

const observer2 = createObservable();
observer2.subscribe(fn);
observer2.broadcast('Hello from the observable.');

// Practical Application

function createObservable2() {
    return {
        subscribers: [],

        subscribe(fn) {
            this.subscribers.push(fn);
        },
    
        unsubscribe(fn) {
            this.subscribers = this.subscribers.filter(item => item != fn);
        },
    
        broadcast(data) {
            for(let i = 0; i < this.subscribers.length; i++) {
                this.subscribers[i](data);
            }
        },
    };  
}

const observer3 = createObservable2();

function callbackFn(count) {
    document.getElementById('count').innerText = count;
}

observer3.subscribe(callbackFn);

document.getElementById('inc').addEventListener('click', function() {
    observer.broadcast(
        parseInt(document.getElementById('count').innerText, 10) + 1
    );
});

document.getElementById('dec').addEventListener('click', function() {
    observer.broadcast(
        parseInt(document.getElementById('count').innerText, 10) - 1
    );
});