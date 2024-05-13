const inquirer = require(`inquirer`);
const fs = require(`fs`);
const fileName = "./examples/logo.svg";
const selectShape = require(`./lib/shapeSelection`);

function generateLogo(response) {
    const logo = selectShape(response);
    fs.writeFile(fileName, logo, () => console.log(`Generated logo.svg`));
}

function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Enter upto 3 characters for a logo:',
            validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\nText must not be larger than 3 characters! Please check your input and try again.");
            }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a colour for text (Either colour name or Hexadecimal number):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape for the logo:',
            choices: ['Square', 'Circle', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a colour for the shape (Either colour name or Hexadecimal number):'
        }
        ]).then((response) => {
            console.log(`You have selected the characters: ${response.logoText} which will be in the color of ${response.textColor}. Using the ${response.shape} Shape with the shape color of ${response.shapeColor}`);
            generateLogo(response);
        })
};

init();