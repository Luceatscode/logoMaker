const { validate } = require('@babel/types');
const inquirer = require('inquirer');
const fs = require('fs');
var svg = require('svg-builder')
    .width(300)
    .height(200);

var validateColor = require('validate-color').default;
const shapes = require('./lib/shapes');

function isValidColor(color) {
    return validateColor(color);
}

function init() {
    const { Square, Circle, Triangle } = shapes;
    inquirer.prompt([
        {
            message: 'What is the text for your logo',
            name: 'text',
            type: 'input',
            validate: function (answer) {
                if (answer.length > 3) {
                    return console.log("\nYou must enter up to 3 characters");
                }
                else return true;
            }
        },
        {
            message: 'What color of text would you like',
            name: 'textcolor',
            type: 'input',
            validate: function (answer) {
                if (isValidColor(answer) == false) {
                    return console.log("\nYou must choose a valid color or hexadecimal value");

                } else return true;
            }
        },
        {
            message: 'What shape would you like for your logo',
            name: 'shape',
            type: 'list',
            choices: ['square', new inquirer.Separator(), 'circle', new inquirer.Separator(), 'triangle']
        },
        {
            message: 'What color would you like for your shape',
            name: 'shapecolor',
            type: 'input',
            validate: function (answer) {
                if (isValidColor(answer) == false) {
                    return console.log("\nYou must choose a valid color or hexadecimal value");
                } else return true;
            }
        },
    ]).then(function (data) {
        var logo = svg;
        console.log('data',data);
        console.log('logo',logo);
        console.log('svg',svg);


        if (data.shape == 'square') {
            logo = new Square(data.text, data.textcolor, data.shapecolor).render();
        }
        else if (data.shape == 'circle') {
            logo = new Circle(data.text, data.textcolor, data.shapecolor).render();
        }
            else if (data.shape == 'triangle') {
                logo = new Triangle(data.text, data.textcolor, data.shapecolor).render();
                    // .polygon({
                    //     fill: data.shapecolor,
                    //     points: '0,0 100,0 50,100',
                    //     'stroke-width': 1,
                    //     stroke: data.shapecolor,
                    // }).text({x: 10, y: 20, stroke: data.textcolor, fill: data.textcolor, 'font-size': 100}, data.text).render();
                }

        // Get the SVG string
        // const svgContent = svg.toString();

        // Save the SVG content to a file
        console.log('hello paul',logo);
        fs.writeFileSync('output.svg',logo);
    })
}
// Function call to initialize app
init();
