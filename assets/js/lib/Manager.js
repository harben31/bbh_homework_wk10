const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber){
        super(empName, id, email);

        this.officeNumber = officeNumber,
        this.role = 'Manager'
    }

    getOfficeNumber(){
        return this.officeNumber
    }

}

module.exports = Manager