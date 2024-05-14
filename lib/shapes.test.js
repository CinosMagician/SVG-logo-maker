// A testing file to make sure all scripts run as intended
// impoort the classes for testing.
const {Square, Circle, Triangle} = require(`./shapes`);

// Tests a new Square with Squ text, black font and red shape color
describe('Square', () => {
    it('Should return with an SVG file with the Squ characters with black text, square shape choice and red color choice for the shape', () => {
        const square = new Square('Squ','black','red');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="black">Squ</text>
        </svg>
        `
        );
    });
});

// Tests a new Circle with Cir text, cyan font and purple shape color
describe('Circle', () => {
    it('Should return with an SVG file with the Cir characters with cyan text, circle shape choice with purple color choice for the shape', () => {
        const circle = new Circle('Cir','cyan','purple');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="purple"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="cyan">Cir</text>
        </svg>
        `
        );
    });
});

// Tests a new Triangle with Tri text, gold font and #F0F8FF (aliceBlue) shape color
describe('Triangle', () => {
    it('Should return with an SVG file with the Tri characters with gold text, triangle shape choice with #F0F8FF (aliceBlue) color choice for the shape', () => {
        const triangle = new Triangle('Tri','gold','#F0F8FF');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="#F0F8FF"/>
            <text x="100" y="155" font-size="65" text-anchor="middle" fill="gold">Tri</text>
        </svg>
        `
        );
    });
});