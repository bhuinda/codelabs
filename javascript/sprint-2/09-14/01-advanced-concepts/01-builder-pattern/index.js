// Builder Pattern

class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this // woah!
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

let user = new UserBuilder('Bob').build();
console.log(user);

let user2 = new UserBuilder('Bob').setAge(10).build();
console.log(user2);

//

class User2 {
    constructor(name, { age, phone, address } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

let user3 = new User2('Bob', {age: 10, address: new Address(65809, '4170 E Wilshire St')});
console.log(user3);