const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, id, email, gitHub){
        super(empName, id, email);

        this.gitHub = gitHub,
        this.role = 'Engineer'
        // ,this.questions = this.questions.push(`{
        //     type: \`input\`,
        //     name: \`engGitHub\`,
        //     message: \`Enter you engineer's github username.\` 
        // }`)
    }

    getGitHub(){
        return this.gitHub
    }
}

module.exports = Engineer