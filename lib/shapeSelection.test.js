const {Square, Circle, Triangle} = require(`./shapes`);

describe(`Square Selection`, () => {
    it(`Should check to see if the value of shape selected is square`, () => {
        const testResponse = {
            logoText: 'ABC',
            textColor: 'red',
            shape: 'Square',
            shapeColor: 'black'
          };
        expect(testResponse.shape).toBe(`Square`);
    });
});

describe(`Circle Selection`, () => {
    it(`Should check to see if the value of shape selected is circle`, () => {
        const testResponse = {
            logoText: 'XYZ',
            textColor: 'blue',
            shape: 'Circle',
            shapeColor: 'white'
          };
        expect(testResponse.shape).toBe(`Circle`);
    });
});

describe(`Triangle Selection`, () => {
    it(`Should check to see if the value of shape selected is triangle`, () => {
        const testResponse = {
            logoText: '123',
            textColor: 'purple',
            shape: 'Triangle',
            shapeColor: 'orange'
          };
        expect(testResponse.shape).toBe(`Triangle`);
    });
});