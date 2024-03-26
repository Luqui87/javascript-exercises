const reverseString = function(string) {
    let textArray = string.split('')
    textArray = textArray.reverse()
    const reverseString = textArray.join("")
    return reverseString

};

// Do not edit below this line
module.exports = reverseString;