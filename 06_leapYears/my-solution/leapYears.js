const leapYears = function(year) {
    isDivByFour = year % 4 == 0
    isDivByHun = year % 100 == 0
    isDivByFourHun = year % 400 == 0

    if (isDivByFour && ( (isDivByFourHun ||  !isDivByHun) )){
        return true;
    } else{
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
