const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber){
        super(empName, id, email);

        this.opt3Answer = officeNumber,
        this.opt3 = 'Office '
        this.role = 'Manager'
    }

    static questions = [
        {
        type: `input`,
        name: `empName`,
        message: `What is your name?`,
    },
    {
        type: `input`,
        name: `id`,
        message: `What is your managers ID`
    },
    {
        type: `input`,
        name: `email`,
        message: `what is your email?`
    },
    {
        type: `list`,
        name: `opt3`,
        message: `Which office do you manage?`,
        
        choices: [`#1111`, `#111`, `#11`, `# 1`]
    },
    {
        type: `list`,
        name: `roleList`,
        message: `Would you like to add an employee to your roster?`,
    
        choices: [`Engineer`, `Intern`, `I am done`]
    }
    ]

    getOfficeNumber(){
        return this.opt3Answer
    }

}

module.exports = Manager