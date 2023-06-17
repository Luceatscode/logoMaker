const { validate } = require('@babel/types');
const inquirer = require('inquirer')
import { validateHTMLColorHex } from 'validate-color';
import { validateHTMLColorName } from 'validate-color';

function init() { 
    inquirer.prompt([
        {
            message: 'What is the text for your logo',
            name: 'text',
            type: 'input',
            validate: function (answer) {
                if (answer.length > 3) {
                    return console.log("You must enter up to 3 characters");
                }
                else return true;
            }
        },
        {
            message: 'What color of text would you like',
            name: 'textcolor',
            type: 'input',
            validate: function (answer) {
                if (validateColor(answer) == false) {
                    return console.log("You must choose a valid color or hexadecimal value");

                } else return true;
            }
        },
        {
            message: 'What shape would you like for your logo',
            name: 'shape',
            type: 'input',
            choices: ['square', 'circle', 'triangle']
        },
        {
            message: 'What color would you like for your shape',
            name: 'shapecolor',
            type: 'input',
            validate: function (answer) {
                if (validateColor(answer) == false) {
                    return console.log("You must choose a valid color or hexadecimal value");
                } else return true;
            }
        },
    ]).then(function (data) {
    })
}
// Function call to initialize app
init();
