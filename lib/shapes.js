// Added variables for less repetitive code and to be able to edit data if needed.
const svgWidth = 300;
const svgHeight = 200;
let fontSize = 70;


// This class is the parent class with the main constructor that each shape class will all include
class Shapes {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}
// This is the class for constructing the Square logo
class Square extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="${svgWidth}" height="${svgHeight}"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

// This is the class for constructing the Circle logo
class Circle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="${svgWidth}" height="${svgHeight}"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

// This is the class for constructing the Triangle logo
class Triangle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    };
    render() {
        // As the shape is different from the others, certain 3 character combinations would be too large and pop out of the Triangle area
        // Given this, it is best to shrink the font size so that no matter which 3 letter combo is used, it will be small enough to fit.
        if(this.logoText.length === 3) {
            fontSize = 65;
        }
        return `
        <svg version="1.1"
            width="${svgWidth}" height="${svgHeight}"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="155" font-size="${fontSize}" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};
// Exporting the classes for use in other files.
module.exports = {Square, Circle, Triangle};