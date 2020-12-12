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
    const newMember = [];
       
          if (answer.role === "Engineer") {
              newMember = new Engineer(name, email, id, github);
          } else if (answer.role === "Intern") {
              newMember = new Intern(name, email, id, school);
          } else {
              newMember = new Manager(name, email, id, officeNumber);
          }
          employees.push(newMember);
          
          .then(function() {
              if (moreMembers === "yes") {
                  addMember();
              } else {
                  console.log("All Done!");
                  const Html = render(newMember);
              }
          });
          
      });
  };

initApp();