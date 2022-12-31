const Employee = require('./lib/Employee.class.js');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create an object with Employee's name, id, and email if provided valid arguments", () => {
            const employee = new Employee('Tom', 8675309, 'tomfromtimtown@timtown.tomtim');

            expect(employee.name).toEqual("Tom");
            expect(employee.id).toEqual(8675309);
            expect(employee.email).toEqual('tomfromtimtown@timtown.tomtim');
        });
        it("should throw an error if provided no arguments", () => {
            const na = () => new Employee();
      
            expect(na).toThrow(err);
        });
        it("should throw an error if not provided an age", () => {
            const na = () => new Employee("Tom", "", 'tomfromtimtown@timtown.tomtim');
            const err = new Error("Required parameter: 'id', not provided");
      
            expect(na).toThrowError(err);
        });
    })
}) 