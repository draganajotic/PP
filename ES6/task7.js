
// Write a function that filters all integer arguments that contain digit 5.
// Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// Output: [45, 553]

function intNumbers (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) ){

            let strNum = array[i].toString();

            for (let j = 0; j < strNum.length; j++){
                if (strNum[j] === "5") {
                    newArray[newArray.length] = array[i];
                    break;
                }
            }
        } 
    } return newArray;
}
console.log(intNumbers([23, 11.5, 9, 'abc', 45, 28, 553, 25] ));