const svgWidth = 300;
const svgHeight = 200;

class Shapes {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
}

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
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

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
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

class Triangle extends Shapes {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor, shapeColor);
    };
    render() {
        return `
        <svg version="1.1"
        width="${svgWidth}" height="${svgHeight}"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="155" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

module.exports = {Square, Circle, Triangle};