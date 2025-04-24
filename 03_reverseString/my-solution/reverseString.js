const reverseString = function(string) {
    let reverseString = ""
    length = string.length
    for (i = 1; i <= length; i++){
        char = string.charAt(length-i)
        reverseString+=char
    }
    return reverseString

};

// Do not edit below this line
module.exports = reverseString;
