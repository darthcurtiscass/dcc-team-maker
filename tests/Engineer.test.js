const Engineer = require('../lib/Engineer.subclass');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create an object with Engineer's name, id, email, and github ID if provided valid arguments", () => {
            const engineer = new Engineer('Tom', 8, 'tom@tom.com', "tomcat123");

            expect(engineer.name).toEqual("Tom");
            expect(engineer.id).toEqual(8);
            expect(engineer.email).toEqual('tom@tom.com');
            expect(engineer.github).toEqual("tomcat123");
        });
        it("Should throw an error if provided no arguments", () => {
            const na = () => new Engineer();
            const err = new Error ("No arguments provided")
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with a name", () => {
            const na = () => new Engineer("", "8", 'tom@tom.com', "tomcat123");
            const err = new Error("Required argument: 'name' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an id", () => {
            const na = () => new Engineer("Tom", "", 'tom@tom.com', "tomcat123");
            const err = new Error("Required argument: 'id' not provided");
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an email", () => {
            const na = () => new Engineer("Tom", 8, "", "tomcat123");
            const err = new Error("Required argument: 'email' not provided")

            expect(na).toThrow(err);
        })
        it("Should throw an error if not provided with a github account", () => {
            const na = () => new Engineer("Tom", 8, 'tom@tom.com', "")
            const err = new Error("Required argument: 'github' not provided")

            expect(na).toThrow(err);
        })
    })
})