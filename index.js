// Here are the required scripts for functions used in this program.
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const selectShape = require(`./lib/shapeSelection`);
const validateColor = require(`./lib/colorCheck`);
// This is so we can have our filename and location in one variable
const fileName = "./examples/logo.svg";

// This function is run after all the responses have been gathered
function generateLogo(response) {
    // It then runs the selectShape function to determine which shape was selected and run the correct render function in turn
    const logo = selectShape(response);
    // After running the correct render function it will write that data to a file named logo.svg and log a console message
    fs.writeFile(fileName, logo, () => console.log(`Generated logo.svg`));
}

// This function is to be run when the program starts up to begin prompting the user for the questions.
function init() {
    inquirer
        .prompt([
        {
            // Ask the user to input the characters, limiting if it is greater than 3
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
            // Ask the user to enter a color for the logo text, color name or Hex value, with error check if it doesnt match the list in colorIndex.js
            type: 'input',
            name: 'textColor',
            message: 'Enter a colour for text using either a colour name with camel casing for 2 word color names (e.g. aliceBlue) or a Hexadecimal value (e.g. #F0F8FF):',
            validate: (answer) => {
                const isValid = validateColor(answer);
                    if (isValid) {
                        return true;
                    } else {
                        console.log("\nColor must be a valid name or hexidecimal input, Note that not all colors are available, please try again.");
                        return false;
                    }
            }
        },
        {
            // Ask the user to select a shape, square, circle or triangle
            type: 'list',
            name: 'shape',
            message: 'Please select a shape for the logo:',
            choices: ['Square', 'Circle', 'Triangle']
        },
        {
            // Ask the user to enter a color for the shape, color name or Hex value, with error check if it doesnt match the list in colorIndex.js
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a colour for text using either a colour name with camel casing for 2 word color names (e.g. aliceBlue) or a Hexadecimal value (e.g. #F0F8FF):',
            validate: (answer) => {
                const isValid = validateColor(answer);
                    if (isValid) {
                        return true;
                    } else {
                        console.log("\nColor must be a valid name or hexidecimal input, Note that not all colors are available, please try again.");
                        return false;
                    }
            }
        }
        // It will then collect the response as an object and use it in the generateLogo function
        ]).then((response) => {
            generateLogo(response);
        })
};
// This is used to run the init function when the file is run in the terminal
init();