/* 3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, ' ' , undefined, 47, null]
Output: [15, -22, 47]
*/
function choosenElements(a) {
    var newArray = [];
    for (var i = 0; i < a.length; i++) {
        if (!! a[i] == false) {
            continue;
        } else { 
            newArray[newArray.length] = a[i];
        }
    }
    return newArray;
}
console.log (choosenElements([NaN, 0, 15, false, -22, '' , undefined, 47, null]));