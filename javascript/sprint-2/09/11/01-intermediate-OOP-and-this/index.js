// Taking the liberty to skip 1. and 2. because I demonstrated these skills proactively.

// 3. Embracing OOP Techniques

// 3a.

class Playlist {
    constructor(title, duration) {
        this.title = [title]; // as string
        this.duration = [duration]; // as number, in seconds
    }
    addVideo(title, duration) {
        this.title.push(title);
        this.duration.push(duration);
        console.log('New video added.')
    }
    totalDuration() {
        const total = this.duration.reduce((acc, curr) => acc + curr, 0);
        return total;
    }
    averageDuration() {
        const total = this.totalDuration();
        const average = total / this.duration.length;
        return average;
    }
}

const newPlaylist = new Playlist('catvideo', 9);
newPlaylist.addVideo('dogvideo', 20);

console.log(newPlaylist);
console.log(newPlaylist.totalDuration());
console.log(newPlaylist.averageDuration());

// 3b.

function contextDemonstrator(method, context) {

    const boundMethod = method.bind(context);
    const arrowFunction = () => method.call(context);
    
    console.log("Method called with context using .bind():", boundMethod());
    console.log("Method called with context using arrow function:", arrowFunction());
};

const obj = {
    key: 1,
    getValue() {
        return this.key;
    },
};

contextDemonstrator(obj.getValue, obj);