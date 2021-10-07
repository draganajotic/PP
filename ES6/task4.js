
// Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]
function evenElements(array){
    let output = [];
    for (let i = 0; i < array.length; i ++) {
        if ( array[i] % 2 === 0 ) {
            output.push(array[i])
        } else{
            continue
        }
    } return output;
} console.log(evenElements([6, 11, 9, 0, 3, 12, 4]))