const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');

let initialSet = {};
let nextDest = {};
let employeeLibrary = [];




function managerData() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the new manager's office number?"
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      initialSet.officeNumber = answers.officeNumber;
      employeeLibrary = employeeLibrary.concat(initialSet)

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

function initialRun() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'input',
        name: 'name',
        message: "What is the new employee's name?"
      },
      {
        type: 'number',
        name: 'Id',
        message: "What is the new employee's ID number?"
      },
      {
        type: 'input',
        name: 'Email',
        message: "What is the new employee's Email?"
      },
      {
        type: 'list',
        name: 'role',
        message: "What is the new employee's role?",
        choices: ['Manager', 'General Employee']
      },

    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      initialSet = answers;
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

function manMenuOptins() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'list',
        name: 'dest',
        message: "What would you like to do next?",
        choices: ['Add an engineer to this team.', 'Add an intern to this team.', 'View my team.']
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      nextDest = answers
      if (nextDest.dest == 'Add an engineer to this team.') {
        engineerData();

      };
      if (nextDest.dest == 'Add an intern to this team.') {
        internData();

      };
      if (nextDest.dest == 'View my team.') {

        mapnWrite();
      };
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

function engineerData() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'input',
        name: 'name',
        message: "What is the new employee's name?"
      },
      {
        type: 'number',
        name: 'Id',
        message: "What is the new employee's ID number?"
      },
      {
        type: 'input',
        name: 'Email',
        message: "What is the new employee's Email?"
      },
      {
        type: 'input',
        name: 'gitHub',
        message: "What is your GitHub?",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      initialSet = answers;
      initialSet.role = 'Engineer';
      employeeLibrary = employeeLibrary.concat(initialSet)
      manMenuOptins();

    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};
function internData() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'input',
        name: 'name',
        message: "What is the new employee's name?"
      },
      {
        type: 'number',
        name: 'Id',
        message: "What is the new employee's ID number?"
      },
      {
        type: 'input',
        name: 'Email',
        message: "What is the new employee's Email?"
      },
      {
        type: 'input',
        name: 'school',
        message: "What is your School?",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      initialSet = answers;
      initialSet.role = 'Intern';
      employeeLibrary = employeeLibrary.concat(initialSet)
      manMenuOptins();
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};
function mainMenuOptins() {
  return inquirer
    .prompt([
      /* Pass your questins in here */
      {
        type: 'list',
        name: 'dest',
        message: "What would you like to do next?",
        choices: ['Create a new Employee.', 'View my team.']
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      nextDest = answers
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};
function mapnWrite() {
  for ( let i = 0; i < employeeLibrary.length; i++) {
    let htmlFormat = `<div class="container py-2">
    <div class="row">
        <div class="col">
            <h2 class="font-weight-light">DynoTeam</h2>
            <p>
                ${employeeLibrary[i].name}
            </p>
            <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Role:${employeeLibrary[i].name}  ID:${employeeLibrary[i].id}  Email:${employeeLibrary[i].email}  Office Number:${employeeLibrary[i].officeNumber}</p>
    </div>
    </div>
        </div>
    </div>
    </div>`;

    if (employeeLibrary[i].role == 'Manager') {
      let newManager = new Manager (`${employeeLibrary[i].name}`,`${employeeLibrary[i].id}`,`${employeeLibrary[i].email}`,`${employeeLibrary[i].officeNumber}`)
      fs.writeFile('index.html', htmlFormat, (err) => { if (err) { console.log(err); } });
    }
    if (employeeLibrary[i].role == 'Engineer') {
      console.log('mapped  an engineer');
    }
    if (employeeLibrary[i].role == 'Intern') {
      console.log('mapped an intern');
    }
    console.log('maps done');

  }
};

async function mainMenu() {

  await mainMenuOptins();
  if (nextDest.dest == 'Create a new Employee.') {
    await initialRun();
    if (initialSet.role == 'Manager') {
      await managerData();
      await manMenuOptins();

    };
  }
};



mainMenu();