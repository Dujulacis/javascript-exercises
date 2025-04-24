

const repeatString = function(string, num) {
    let storedString = ''
    if (num < 0) {
        return "ERROR"
    } else{
        for (let i=0; i < num; i++){
            storedString+=string
        }
        return storedString
    }


};

// Do not edit below this line
module.exports = repeatString;
