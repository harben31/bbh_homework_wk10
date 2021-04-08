const Manager = require('../lib/Manager')

describe('Manager', ()=>{
    it('should have "name", "id", "email" and "officeNumber" properties and methods to get each of those values.', ()=>{
        const manager = new Manager('Bob', 12, 'email@email.email', 24)

        expect(manager.opt3Answer).toEqual(24);
        expect(manager.empName).toEqual('Bob');
        expect(manager.id).toEqual(12);
        expect(manager.email).toEqual('email@email.email')
    })

    describe('getName(), getId(), getEmail(), getRole() and getOfficeNumber', ()=>{
        it('should return manager name, id, email and role respectively', ()=>{
            const manager = new Manager('Bob', 12, 'email@email.email', 24);

            expect(manager.getOfficeNumber()).toEqual(24);
            expect(manager.getName()).toEqual('Bob');
            expect(manager.getId()).toEqual(12);
            expect(manager.getEmail()).toEqual('email@email.email');
            expect(manager.getRole()).toEqual('Manager');
        })
    })
})