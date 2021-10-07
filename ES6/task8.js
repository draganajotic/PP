
// Write a function that returns indexes of the elements greater than 10. 
// Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// Output: [1, 2, 5]

function indexOfElements (array){
    let indexArray = [];
    for (let i = 0; i< array.length; i++) {
        if (array[i] > 10) {
            indexArray.push(i);
        }
    }
    return indexArray;
}
console.log(indexOfElements([1.6, 11.34, 29.23, 7, 3.11, 18, 10.0001]));

