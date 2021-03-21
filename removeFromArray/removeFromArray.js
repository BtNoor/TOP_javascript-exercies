const removeFromArray = function(rem, params) {

    let newArray = rem;

    for (c = 1; c < arguments.length; c++) {
        for (i = 0; i < newArray.length; i++) {
            if (arguments[c] === newArray[i]) {
                newArray.splice(i, 1);
            }
        }
    }
    
    return newArray;
}

module.exports = removeFromArray
