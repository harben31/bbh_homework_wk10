const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, id, email, school){
        super(empName, id, email);

        this.school = school,
        this.role =  'Intern'
        // ,this.questions = this.questions.push(`{
        //     type: \`input\`,
        //     name: \`intSchool\`,
        //     message: \`Enter you Interns's school.\` 
        // }`)
    }

    getSchool(){
        return this.school
    }

}

module.exports = Intern