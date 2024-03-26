const removeFromArray = function(array) {
    const arg = Array.from(arguments);
    arg.shift();

    for (let i = 0; i < arg.length ; i++){

        array = array.filter(number => number !== arg[i])

    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


