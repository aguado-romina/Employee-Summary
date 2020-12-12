const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];


function initApp() {
  addMember();
}

function addMember() {
  inquirer.prompt([{
      message: "Enter team member's name",
      name: "name"
  },
  {
      type: "list",
      message: "Select team member's role",
      choices: [
          "Engineer",
          "Intern",
          "Manager"
      ],
      name: "role"
  },
  {
      message: "Enter team member's id",
      name: "id"
  },
  {
      message: "Enter team member's email address",
      name: "email"
  }])
    
  .then(function employeeRole(answer) {
    let newMember = [];
       
          if (answer.role === "Engineer") {
              inquirer.prompt([{
                  message: "Whats your github?",
                  name: "github",  
              }]).then(function(engineerInfo){
                newMember = new Engineer(answer.name, answer.email, answer.id, engineerInfo.github);
                employees.push(newMember)  
                moreMembers();  
              })
              
          } else if (answer.role === "Intern") {
            inquirer.prompt([{
                message: "Whats your school name?",
                name: "school",  
            }]).then(function(internInfo){
              newMember = new Intern(answer.name, answer.email, answer.id, internInfo.school);
              employees.push(newMember)  
              moreMembers();  
            })
              
          } else {
            inquirer.prompt([{
                message: "Whats your officee number?",
                name: "officeNumber",  
            }]).then(function(managerInfo){
              newMember = new Manager(answer.name, answer.email, answer.id, managerInfo.officeNumber);
              employees.push(newMember)  
              moreMembers();  
            })
              
          }
         
          
      })
    };

    function moreMembers() {
        inquirer.prompt([{
            message: "Do you want to add more team memebers?",
            name: "question"
        }])
        .then(function (otherAnswers){
            if (otherAnswers.question === "yes") {
                addMember();
            } else {
                console.log("All Done!");
                // const Html = render(employees);
                // outputPath(fs.Html);
                return fs.writeFileSync(outputPath,render(employees),"utf-8") 
            } 
        })
    };    


initApp();
