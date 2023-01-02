const Employee = require ('./Employee.class')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
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
        if(officeNumber === "") {
            throw new Error("Required argument: 'officeNumber' not provided")
        }
    }
    getName () {
        const managerName = this.name
    }
    getId () {
        const managerId = this.id
    }
    getEmail () {
        const managerEmail = this.email
    }
    getOfficeNumber () {
        const officeNumber = this.officeNumber
    }
    getRole () {
        return "Manager"
    }
}

module.exports = Manager;