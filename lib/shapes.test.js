const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes shoud be rendered accordingly to the Acceptance Criteria.', () => {
    describe('The background color of the circle should match the user\'s input and be generated correctly.', () => {
        test('whether the circle-shaped logo is generated correctly, with the background color matching the user\'s input.', () => {
            const circle = new Circle();
            circle.setLogoColor('yellow');
            expect(circle.renderLogoColor()).toEqual(`<circle cx="150" cy="100" r="80" fill="yellow" />`);
        })
    });
    describe('The text of the circle\'s logo should match the user\'s input and be generated correctly.', () => {
        test('whether circle\'s logo text generates correctly with up to 3 characters. Additionally, check that the font color matches the user\'s input.', () => {
            const circle = new Circle();
            expect(circle.renderLogoText('QW', 'black')).toEqual(`<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">QW</text>`);
        })
    });
    describe('The text of the circle\'s logo should match the user\'s input and be generated correctly.', () => {
        test.failing('fail if circle\'s logo text contains more than three characters.', () => {
            const circle = new Circle();
            expect(circle.renderLogoText('QWER', 'black')).toEqual(`<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">QWE</text>`);
        })
    });
    describe('The background color of the square should match the user\'s input and be generated correctly.', () => {
        test('whether the square-shaped logo is generated correctly, with the background color matching the user\'s input.', () => {
            const square = new Square();
            square.setLogoColor('yellow');
            expect(square.renderLogoColor()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="yellow" />`);
        })
    });
    describe('The text of the square\'s logo should match the user\'s input and be generated correctly.', () => {
        test('whether square\'s logo text generates correctly with up to 3 characters. Additionally, check that the font color matches the user\'s input.', () => {
            const square = new Square();
            expect(square.renderLogoText('QW', 'black')).toEqual(`<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">QW</text>`);
        })
    });
    describe('The text of the square\'s logo should match the user\'s input and be generated correctly.', () => {
        test.failing('fail if square\'s logo text contains more than three characters.', () => {
            const square = new Square();
            expect(square.renderLogoText('QWER', 'black')).toEqual(`<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">QWE</text>`);
        })
    });
    describe('The background color of the triangle should match the user\'s input and be generated correctly.', () => {
        test('whether the triangle-shaped logo is generated correctly, with the background color matching the user\'s input.', () => {
            const triangle = new Triangle();
            triangle.setLogoColor('yellow');
            expect(triangle.renderLogoColor()).toEqual(`<polygon points="150,20 55,160 245,160" fill="yellow" />`);
        })
    });
    describe('The text of the triangle\'s logo should match the user\'s input and be generated correctly.', () => {
        test('whether triangle\'s logo text generates correctly with up to 3 characters. Additionally, check that the font color matches the user\'s input.', () => {
            const triangle = new Triangle();
            expect(triangle.renderLogoText('QW', 'black')).toEqual(`<text x="150" y="125" font-size="40" text-anchor="middle" fill="black">QW</text>`);
        })
    });
    describe('The text of the triangle\'s logo can not contain more than 3 characters.', () => {
        test.failing('fail if triangle\'s logo text contains more than three characters.', () => {
            const triangle = new Triangle();
            expect(triangle.renderLogoText('QWER', 'black')).toEqual(`<text x="150" y="125" font-size="40" text-anchor="middle" fill="black">QWE</text>`);
        })
    });
} )


