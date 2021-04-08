const Intern = require('../lib/Intern')

describe('Engineer', ()=>{
    it('should have "name", "id", "email" and "school" properties and methods to get each of those values.', ()=>{
        const intern = new Intern('Bob', 12, 'email@email.email', 'hogWarts')

        expect(intern.opt3Answer).toEqual('hogWarts')
        expect(intern.empName).toEqual('Bob');
        expect(intern.id).toEqual(12);
        expect(intern.email).toEqual('email@email.email')
    })

    describe('getName(), getId(), getEmail(), getRole() and getOfficeNumber', ()=>{
        it('should return intern school, name, id, email and role respectively', ()=>{
            const intern = new Intern('Bob', 12, 'email@email.email', 'hogWarts');

            expect(intern.getSchool()).toEqual('hogWarts');
            expect(intern.getName()).toEqual('Bob');
            expect(intern.getId()).toEqual(12);
            expect(intern.getEmail()).toEqual('email@email.email');
            expect(intern.getRole()).toEqual('Intern');
        })
    })
})