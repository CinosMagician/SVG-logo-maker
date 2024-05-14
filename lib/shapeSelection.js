// Adds in the three classes of all the shapes required.
const {Square, Circle, Triangle} = require(`./shapes`);

// This function gets the response from the prompt and looks at the shape value of response to match the correct shape
// Once it does, it will create a new shape of that class and run its render function and return that function result.
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
// Exports this module to be used in any other file that requires it.
module.exports = selectShape;