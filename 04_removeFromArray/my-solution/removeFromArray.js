const removeFromArray = function(array, ...toBeRemoved) {
    
    toBeRemoved.forEach((arg) => {
        let removeIndex = []
        for (element of array){
            if (element === arg){
                removeIndex.push(array.indexOf(element))

            }
        }
        for (el of removeIndex){
            array.splice(el,1)
        }


    })
    return array
}

// Do not edit below this line
module.exports = removeFromArray;
