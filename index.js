const isCssColorName = require('is-css-color-name');
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');


// Prompts with questions
inquirer.prompt([
    {
        name: 'logoText',
        message: 'Kindly provide a logo name containing up to three characters.',
        type: 'input',
        filter: function(input) {
            return input.trim().toUpperCase();
        },
        validate: function(input) {
            if (input.length === 0 || input.length > 3) {
                return 'The logo name must have at least one character in it and cannot exceed three characters. \nPlease ensure that this condition is met.';
            } else {
                return true
            }
        },
    },
    {
        name: 'logoFontColor',
        message: 'Kindly specify the color for the font of your logo\'s name.',
        type: 'input',
        filter: function(input) {
            return input.trim().toLowerCase();
        },
        validate: validateColorName,
    },
    {
        name: 'logoShape',
        message: 'Kindly select the desired logo shape from the provided list.',
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
            }
        ]
    },
    {
        name: 'logoBgColor',
        message: 'Kindly specify the color for your logo shape by either entering the color name or providing its hexadecimal code.',
        type: 'input',
        filter: function(input) {
            return input.trim().toLowerCase();
        },
        validate: validateColorName,
    },
]).then(answer => {
    console.log(answer)
    
    svgMaker(answer);
})

    
// function processes data for creating svg file
function svgMaker( { logoText, logoFontColor, logoShape, logoBgColor } ) {
    logoShape.setLogoColor(logoBgColor);
    const svgContent = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="transparent" />

            ${logoShape.renderLogoColor()}

            ${logoShape.renderLogoText(logoText, logoFontColor)}
        </svg>`

    writeToFile('logo.svg', svgContent)
}


// function generates files based on the recieved data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log('Generated logo.svg!')
        }
    })
}


// function validates whether the color name or hexadecimal code is spelled correctly and is supported by SVG
function validateColorName(colorNameOrHexCode) {
    const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/; // regular expression to match the string against the pattern for a hexadecimal color code

    if (hexColorRegex.test(colorNameOrHexCode)) {
      console.log(`${colorNameOrHexCode} is a valid hexadecimal color code.`);
      return true;
    } else if (isCssColorName(colorNameOrHexCode)) {
      console.log(`${colorNameOrHexCode} is a valid CSS color name.`);
      return true;
    } else {
      console.log(`${colorNameOrHexCode} is not a valid SVG color name or hexadecimal code.`);
      return false;
    }
}