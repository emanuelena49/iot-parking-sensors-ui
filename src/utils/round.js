
/**
 * Round a number 
 * 
 * @param {Number} number <- the number you want to round
 * @param {Number} nDecimalValues <- how many decimal values you want to keep
 * @returns {Number} the rounded number
 */
function round(number, nDecimalValues=0) {
    if (typeof(number) !== 'number') {
        number = parseFloat(number);
    }

    let pow = Math.pow(10, nDecimalValues);
    return Math.round(number * pow) / pow;
}

export default round;
export {round};