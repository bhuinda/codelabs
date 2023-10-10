// Facade Pattern

function getUsers() {
    return getFetch('https://jsonplaceholder.typicode.com/users')
}

function getUserPosts(userID) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userID: userID
    })
}

getUsers().then(users => {
    users.forEach(posts => {
        console.log(user.name)
        console.log(posts.length)
    })
})

function getFetch(url, params = {}) {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(`${url}?${queryString}`, {
        method: "GET",
        headers: { "Content-Type": "application/json"}
    }).then(res => res.json())
}