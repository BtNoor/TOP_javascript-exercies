const reverseString = function(word) {

    //Variable to iterate string to
    let storedString = []

    for (i = 0; i < word.length; i++) {
        storedString.unshift(word[i]);
        
    }
    storedString = storedString.join("")
    //storedString = storedString.toString();

    return storedString;
}

module.exports = reverseString
