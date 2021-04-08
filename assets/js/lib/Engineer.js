const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, id, email, gitHub){
        super(empName, id, email);

        this.opt3Answer = gitHub,
        this.opt3 = 'GitHub: '
        this.role = 'Engineer'
        
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
            message: `Enter you engineer's github username.` 
        },
        {
            type: `list`,
            name: `roleList`,
            message: `Would you like to add an employee to your roster?`,
        
            choices: [`Engineer`, `Intern`, `I am done`]
        }
    ]

    getGitHub(){
        return this.opt3Answer
    }
}

module.exports = Engineer