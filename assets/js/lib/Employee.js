class Employee {
    constructor(empName, id, email){
        this.empName = empName,
        this.id = id,
        this.email = email,
        this.role = 'Employee'
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
    ]

    getName(){
        return this.empName;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        //returns employee
        return this.role
    }

    getQuestions(){
        return this.questions
    }
}

module.exports = Employee 