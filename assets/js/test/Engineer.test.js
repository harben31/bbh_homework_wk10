const Engineer = require('../lib/Engineer')

describe('Engineer', ()=>{
    it('should have "name", "id", "email" and "gitHub" properties and methods to get each of those values.', ()=>{
        const engineer = new Engineer('Bob', 12, 'email@email.email', 'gutHib')

        expect(engineer.gitHub).toEqual('gutHib')
        expect(engineer.empName).toEqual('Bob');
        expect(engineer.id).toEqual(12);
        expect(engineer.email).toEqual('email@email.email')
    })

    describe('getGitHub(), getName(), getId(), getEmail(), getRole() and getOfficeNumber', ()=>{
        it('should return manager name, id, email and role respectively', ()=>{
            const engineer = new Engineer('Bob', 12, 'email@email.email', 'gutHib');

            expect(engineer.getGitHub()).toEqual('gutHib');
            expect(engineer.getName()).toEqual('Bob');
            expect(engineer.getId()).toEqual(12);
            expect(engineer.getEmail()).toEqual('email@email.email');
            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
})