const inquirer = require(`inquirer`);
const fs = require(`fs`);

inquirer
    .prompt([
    {
        type: 'input',
        name: 'logoText',
        message: 'Enter upto 3 characters for a logo:',
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
    ]).then((response) => 
    console.log(`You have selected the characters: ${response.logoText} which will be in the color of ${response.textColor}. Using the ${response.shape} Shape with the shape color of ${response.shapeColor}`));
