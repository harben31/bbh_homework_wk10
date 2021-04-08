
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const bill = new Employee('Bill', 100, 'bill@bill.bill');
// console.log(bill)

const jenny = new Manager('Jenny', 200, 'jenny@jenny.jenny', 123);
// console.log(jenny);

const borke = new Engineer('Borke', 300, 'borke@borke.borke', 'borkeHub');
// console.log(borke.questions);

const phill = new Intern('Phill', 400, 'phill@me.up', 'phillschool');
// console.log(phill)

// console.log(Engineer.questions);

const empCardArray = []; //put template literale cards here

const buildHtml = () => {
    
    fs.writeFile(`../../index.html`, 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Document</title>
    </head>
    <body>
        <main>
            <header>
                <h1>R o s t e r</h1>
            </header>
            <div id="cardWrap">
                
            </div>
        </main>
        <script src="./assets/js/index.js"></script>
    </body>
    </html>`,
    (err)=>console.log(err))
    buildCards();
}

const buildCards = ()=>{
    
    for (let i = 0; i < empArray.length; i++) {
        
            empCardArray.push(`<div class="cardColumn">
            <div class="cardHeader">
                <h3 class="name">${empArray[i].empName}</h3>
                <h4 class="role">${empArray[i].role}</h4>
            </div>
            <div class="infoWrap">
                <p class="id cardInfo">Employee ID: ${empArray[i].id} 123</p>
                <p class="email cardInfo">Email: <a href='mailto:${empArray[i].email}>${empArray[i].email}</p>
                <p class="opt3 cardInfo">${empArray[i].opt3} ${empArray[i].opt3Answer}</p>
            </div>
        </div>`)
    }

    console.log(empArray);
    console.log(empCardArray);
}

const empArray = [];//holding emp info
const empInputFn = (role)=>{
    inquirer.prompt(role.questions).then((answers) => {
        empArray.push(new role(answers.empName, answers.id, answers.email, answers.opt3))
        if(answers.roleList===`Engineer`){
            empInputFn(Engineer);
        }
        if(answers.roleList===`Intern`){
            empInputFn(Intern);
        } 
        if(answers.roleList===`I am done`){
            buildHtml();
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

empInputFn(Manager);