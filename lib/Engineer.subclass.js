const Employee = require ('./Employee.class')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
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
        if(github === "") {
            throw new Error("Required argument: 'github' not provided")
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
    getGithub () {
        return this.github
    }
    getRole () {
        return Engineer
    }
}

module.exports = Engineer;