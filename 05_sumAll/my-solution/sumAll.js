const sumAll = function(inta, intb) {
    if ( ((inta >= 1) && (intb >=1) ) &&
        (Number.isInteger(inta) && Number.isInteger(intb))){
            if(inta > intb){
            temp = inta
            inta = intb
            intb = temp

            }
            let finalSum = 0
            for (let i = inta; i <= intb; i++){
                finalSum+=i
            }
            return finalSum
        } else{
            return "ERROR"
    }





};

// Do not edit below this line
module.exports = sumAll;
