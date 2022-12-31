const Employee = require('./lib/Employee.class.js');


describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create an object with Employee's name, id, and email if provided valid arguments", () => {
            const employee = new Employee('Tom', 8, 'tom@tom.com');

            expect(employee.name).toEqual("Tom");
            expect(employee.id).toEqual(8);
            expect(employee.email).toEqual('tom@tom.com');
        });
        it("Should throw an error if provided no arguments", () => {
            const na = () => new Employee();
      
            expect(na).toThrow(err);
        });
        it("Should throw an error if not provided with an id", () => {
            const na = () => new Employee("Tom", "", 'tom@tom.com');
            const err = new Error("Required parameter: 'id', not provided");
      
            expect(na).toThrowError(err);
        });
        it("Should throw and error if not provided with an email", () => {
            const na = () => new Employee("Tom", 8, "");
            const err = new Error("Required parameter: 'email', not provided")

            expect(na).toThrow(err)
        })
    })
})