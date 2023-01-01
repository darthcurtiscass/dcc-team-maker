class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
        if(!name && !id && !email) {
            throw new Error ("No arguments provided")
        }
        if(name === "") {
            throw new Error ("Required argument: 'name' not provided");
        }
        if(id === "") {
            throw new Error("Required argument: 'id' not provided");
            }
        if(email === "") {
            throw new Error("Required argument: 'email' not provided")
        }
}
    getName () {
        return this.name
    }
    getId () {
        return this.id
    }
    getEmail () {
        return this.email
    }
    getRole () {
        return Employee
    }
}

// const test = new Employee("Tom", 'Smells', 'likecabbage@istrue.com')
// console.log(test)

module.exports = Employee;

