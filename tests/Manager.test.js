const Manager = require('../lib/Manager.subclass');

describe('Manager', () => {
    describe('Initialization', () => {
        it("Should create an object with Manager's name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager('Tom', 8, 'tom@tom.com', "12");

            expect(manager.name).toEqual("Tom");
            expect(manager.id).toEqual(8);
            expect(manager.email).toEqual('tom@tom.com');
            expect(manager.officeNumber).toEqual("12");
        });
        it("Should throw an error if provided no arguments", () => {
            const na = () => new Manager();
            const err = new Error ("No arguments provided")
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with a name", () => {
            const na = () => new Manager("", "8", 'tom@tom.com', "12");
            const err = new Error("Required argument: 'name' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an id", () => {
            const na = () => new Manager("Tom", "", 'tom@tom.com', "12");
            const err = new Error("Required argument: 'id' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an email", () => {
            const na = () => new Manager("Tom", 8, "", "12");
            const err = new Error("Required argument: 'email' not provided")

            expect(na).toThrow(err);
        })
        it("Should throw an error if not provided with an Office Number", () => {
            const na = () => new Manager("Tom", 8, 'tom@tom.com', "")
            const err = new Error("Required argument: 'officeNumber' not provided")

            expect(na).toThrow(err);
        })
    })
})