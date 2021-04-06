const Employee = require('../lib/Employee')

describe('Employee', ()=>{
    it('should have "name", "id" and "email" properties and methods to get each of those values.', ()=>{
        const employee = new Employee('Bob', 12, 'email@email.email')

        expect(employee.empName).toEqual('Bob');
        expect(employee.id).toEqual(12);
        expect(employee.email).toEqual('email@email.email')
    })

    describe('getName(), getId(), getEmail() and getRole()', ()=>{
        it('should return employees name, id, email and role respectively', ()=>{
            const employee = new Employee('Bob', 12, 'email@email.email');

            expect(employee.getName()).toEqual('Bob');
            expect(employee.getId()).toEqual(12);
            expect(employee.getEmail()).toEqual('email@email.email');
            expect(employee.getRole()).toEqual('Employee');
        })
    })
})