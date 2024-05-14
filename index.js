const inquirer = require(`inquirer`);
const fs = require(`fs`);
const fileName = "./examples/logo.svg";
const selectShape = require(`./lib/shapeSelection`);
const validateColor = require(`./lib/colorCheck`);

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
            message: 'Enter a colour for text using either a colour name with camel casing for 2 word color names (e.g. aliceBlue) or a Hexadecimal value (e.g. #F0F8FF):',
            validate: (answer) => {
                const isValid = validateColor(answer);
                    if (isValid) {
                        return true;
                    } else {
                        console.log("\nColor must be a valid name or hexidecimal input, please try again.");
                        return false;
                    }
            }
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
            message: 'Enter a colour for text using either a colour name with camel casing for 2 word color names (e.g. aliceBlue) or a Hexadecimal value (e.g. #F0F8FF):',
            validate: (answer) => {
                const isValid = validateColor(answer);
                    if (isValid) {
                        return true;
                    } else {
                        console.log("\nColor must be a valid name or hexidecimal input, please try again.");
                        return false;
                    }
            }
        }
        ]).then((response) => {
            generateLogo(response);
        })
};

init();