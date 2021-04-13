
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
                ${buildCards()}
            </div>
        </main>
        <script src="./assets/js/index.js"></script>
    </body>
    </html>`,
    (err)=>console.log("fs.writeFile ", err))
}

const buildCards = ()=>{
    
    for (let i = 0; i < empArray.length; i++) {
        let otp3Opt;
        if(empArray[i].role==='Engineer'){
            opt3Opt = `<p class="opt3 cardInfo"> GitHub: <a href='https://github.com/${empArray[i].opt3Answer}' target='blank'> ${empArray[i].opt3Answer}</a></p>`
        } else{
            opt3Opt = `<p class="opt3 cardInfo">${empArray[i].opt3} ${empArray[i].opt3Answer}</p>`
        }
            empCardArray.push(`<div class="cardColumn">
            <div class="cardHeader">
                <h3 class="name">${empArray[i].empName}</h3>
                <h4 class="role">${empArray[i].role}</h4>
            </div>
            <div class="infoWrap">
                <p class="id cardInfo">Employee ID: ${empArray[i].id} 123</p>
                <p class="email cardInfo">Email: <a href='mailto:${empArray[i].email}'>${empArray[i].email}</a></p>
                ${opt3Opt}
            </div>
        </div>
        `)
    }

    return empCardArray.join('')
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
        console.log("promp ",  err)
    })
}

empInputFn(Manager);