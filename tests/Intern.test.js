const Intern = require('../lib/Intern.subclass');

describe('Intern', () => {
    describe('Initialization', () => {
        it("Should create an object with Intern's name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('Tom', 8, 'tom@tom.com', "Universtiy of Wyoming");

            expect(intern.name).toEqual("Tom");
            expect(intern.id).toEqual(8);
            expect(intern.email).toEqual('tom@tom.com');
            expect(intern.school).toEqual("Universtiy of Wyoming");
        });
        it("Should throw an error if provided no arguments", () => {
            const na = () => new Intern();
            const err = new Error ("No arguments provided")
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with a name", () => {
            const na = () => new Intern("", "8", 'tom@tom.com', "Universtiy of Wyoming");
            const err = new Error("Required argument: 'name' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an id", () => {
            const na = () => new Intern("Tom", "", 'tom@tom.com', "Universtiy of Wyoming");
            const err = new Error("Required argument: 'id' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an email", () => {
            const na = () => new Intern("Tom", 8, "", "Universtiy of Wyoming");
            const err = new Error("Required argument: 'email' not provided")

            expect(na).toThrow(err);
        })
        it("Should throw an error if not provided with a school", () => {
            const na = () => new Intern("Tom", 8, 'tom@tom.com', "")
            const err = new Error("Required argument: 'school' not provided")

            expect(na).toThrow(err);
        })
    })
})