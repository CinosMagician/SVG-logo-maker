// Add our color index file so we can check to see if the input color is on the list or not in either name or hex form.
const colorList = require(`./colorIndex`);

function validateColor(color) {
    // Checks for the color name
    if (colorList.hasOwnProperty(color)) {
        return true;
    }
    const hexValues = Object.values(colorList);
    // Checks for the hex value on the color list.
    if (hexValues.includes(color)) {
        return true;
    }
    // If it does not match, it will return false which will make the prompt reask the user until a true value is sent through
    return false;
};
// exports this module for use on other files that require it.
module.exports = validateColor;