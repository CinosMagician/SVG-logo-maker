const {Square, Circle, Triangle} = require(`./shapes`);

function selectShape(response) {
    if (response.shape === `Square`) {
        const newLogo = new Square(response.logoText, response.textColor, response.shapeColor);
        return newLogo.render();
    } else if (response.shape === `Circle`) {
        const newLogo = new Circle(response.logoText, response.textColor, response.shapeColor);
        return newLogo.render();
    } else if (response.shape === `Triangle`) {
        const newLogo = new Triangle(response.logoText, response.textColor, response.shapeColor);
        return newLogo.render();
    }
};

module.exports = selectShape;