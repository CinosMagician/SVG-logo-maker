const colorList = require(`./colorIndex`);

function validateColor(color) {
    if (colorList.hasOwnProperty(color)) {
        return true;
    }
    const hexValues = Object.values(colorList);
    if (hexValues.includes(color)) {
        return true;
    }
    return false;
};

module.exports = validateColor;