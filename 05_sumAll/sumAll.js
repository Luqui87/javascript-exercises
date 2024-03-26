const sumAll = function(x, y) {
    if ( (x < 0 || y < 0) || (typeof x !== "number" || typeof y !== "number")){
        return('ERROR')
    }

    let sum = 0

    const start = x < y ? x : y
    const finish = x < y ? y : x


    for (let index = start; index <= finish; index++){
        sum += index
    }


    return sum
};

// Do not edit below this line
module.exports = sumAll;
