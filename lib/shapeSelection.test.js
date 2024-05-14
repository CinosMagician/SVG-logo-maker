// Testing the selection of each shape with sample responses
// Testing to be a square
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
// Testing to be a circle
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
// Testing to be a triangle
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