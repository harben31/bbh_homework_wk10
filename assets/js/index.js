const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const bill = new Employee('Bill', 100, 'bill@bill.bill');
console.log(bill)

const jenny = new Manager('Jenny', 200, 'jenny@jenny.jenny', 123);
console.log(jenny);

const borke = new Engineer('Borke', 300, 'borke@borke.borke', 'borkeHub');
console.log(borke.questions);

const phill = new Intern('Phill', 400, 'phill@me.up', 'phillschool');
console.log(phill)

const mgrQuestions = [
    {
    type: `input`,
    name: `mgrName`,
    message: `What is your name?`,
},
{
    type: `input`,
    name: `mgrId`,
    message: `What is your managers ID`
},
{
    type: `input`,
    name: `mgrEmail`,
    message: `what is your email?`
},
{
    type: `list`,
    name: `mgrOffNum`,
    message: `Which office do you manage?`,
    
    choices: [`office #1111`, `Office #111`, `Office #11`, `Office # 1`]
},
{
    type: `list`,
    name: `roleList`,
    Message: `Would you like to add an employee to your roster?`,

    choices: [`Engineer`, `Intern`, `I am done`]
}
]

//Need to get back here
//add question at end of each employee class 'add another employee?'
let role;
inquirer.prompt(mgrQuestions).then((answers) => {
    if(answers.roleList===`Engineer`){
        role = Engineer
    }else if(answers.roleList===`Intern`){
        role = Intern
    } else {
        return
    }
})

let addEmployee = true;

inquirer.prompt(role.questions).then((answers) => {

})