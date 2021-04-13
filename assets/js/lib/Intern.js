const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empName, id, email, school){
        super(empName, id, email);

        this.opt3Answer = school,
        this.opt3 = 'School: '
        this.role =  'Intern'
    }

   static questions = [
        {
            type: `input`,
            name: `empName`,
            message: `Enter employee's name`
        },
        {
            type: `input`,
            name: `id`,
            message: `Enter employee's employee ID`
        },
        {
            type: `input`,
            name: `email`,
            message : `Enter employee's email`
        },
        {
            type: `input`,
            name: `opt3`,
            message: `Enter you interns's school's name` 
        },
        {
            type: `list`,
            name: `roleList`,
            message: `Would you like to add an employee to your roster?`,
        
            choices: [`Engineer`, `Intern`, `I am done`]
        }
    ]

    getSchool(){
        return this.opt3Answer
    }

}

module.exports = Intern