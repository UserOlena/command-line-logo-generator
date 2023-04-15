//import inquirer from 'inquirer';
//import Circle from './lib/shapes';
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt(
    [
        {
            name: 'logoText',
            message: 'Please enter 3 letters for your logo name',
            type: 'input',
        },
        {
            name: 'logoFontColor',
            message: 'Please enter the color for your logo name.',
            type: 'input',
        },
        {
            name: 'logoShape',
            message: 'Please choose your logo shape from the list.',
            type: 'list',
            choices: [
                {
                    name: 'Circle',
                    value: new Circle()
                },
                {
                    name: 'Square',
                    value: new Square()
                },
                {
                    name: 'Triangle',
                    value: new Triangle()
                },
            ]
        },
        {
            name: 'logoBgColor',
            message: 'Please enter the color for your logo shape.',
            type: 'input',
        },
    ]
).then(answer => {
    console.log(answer)


})


