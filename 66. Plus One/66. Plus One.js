/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] += 1
        return digits
    }
    let number = digits.toString()//convert to string

    number = number.replace(/,/g, '') //removing ',' from the string
    number = BigInt(number)// convert to BigInt type
    number = number+ BigInt(1) // add BigInt to BigInt only
    number = number.toString() // convert back to string so we can loop through it

    const array = []

    for (let i = 0; i < number.length; i++){
        array.push((+number[i]))// pushing the number to the array
    }

    return array
};
