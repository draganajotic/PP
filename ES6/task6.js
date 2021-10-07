
// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]
function intNumbers (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) ){
            // newArray[newArray.length] = array[i];
            newArray.push(array[i])
        } 
    } return newArray
} console.log(intNumbers([1.6, 11.34, 9.23, 7, 3.11, 8, 150]))