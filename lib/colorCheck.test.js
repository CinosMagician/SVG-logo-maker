// Testing the selection of each shape with sample responses
// Add our validate color script so we can check to see if what we input matches
const validateColor = require(`./colorCheck`);

// Testing to be a valid color using a typed name
describe(`Valid Color Name`, () => {
    it(`Should check to see if the value of textColor selected is valid`, () => {
        const testResponse = {
            logoText: 'ABC',
            textColor: 'red',
            shape: 'Square',
            shapeColor: 'black'
          };
        expect(validateColor(testResponse.textColor)).toEqual(true);
    });
});

// Testing to be a invalid color using a typed name that is not on the list
describe(`Invalid Color Name`, () => {
    it(`Should check to see if the value of textColor selected is invalid`, () => {
        const testResponse = {
            logoText: 'ABC',
            textColor: 'lightRed',
            shape: 'Square',
            shapeColor: 'black'
          };
        expect(validateColor(testResponse.textColor)).toEqual(false);
    });
});

// Testing to show what happens if the color is on the list but the input is not correct
describe(`Invalid Color Name`, () => {
    it(`Should check to see if the value of textColor selected is invalid with incorrect case`, () => {
        const testResponse = {
            logoText: 'ABC',
            textColor: 'Red',
            shape: 'Square',
            shapeColor: 'black'
          };
        expect(validateColor(testResponse.textColor)).toEqual(false);
    });
});

// Testing to be a valid color using a hex value
describe(`Valid Color Name`, () => {
    it(`Should check to see if the value of textColor selected is valid using hexadecimal`, () => {
        const testResponse = {
            logoText: 'ABC',
            textColor: '#00FFFF',
            shape: 'Square',
            shapeColor: 'black'
          };
        expect(validateColor(testResponse.textColor)).toEqual(true);
    });
});