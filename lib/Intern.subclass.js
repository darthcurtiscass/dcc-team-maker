const Employee = require ('./Employee.class')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
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
        if(school === "") {
            throw new Error("Required argument: 'school' not provided")
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
    getSchool () {
        return this.school
    }
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;