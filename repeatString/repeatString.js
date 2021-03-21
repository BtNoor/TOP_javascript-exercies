const repeatString = function(word, num) {
    
    //Variable to hold the returned value while iterating
    let returnedString = ""

    for (i = 0; i < num; i++) {
        returnedString += word;
    }

    if (num < 0) {
        returnedString = 'ERROR';
    }

    return returnedString;
}

module.exports = repeatString
