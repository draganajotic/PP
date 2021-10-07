/* 5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, ' ' , 4, 7, null]
Output: 2
*/
function floatValue(array){
    var sum = 0;
for (var i = 0; i<array.length; i++){
    
    var next = parseFloat(array[i]);
    if (isFinite(next) && next !== parseInt(array[i]))

    sum = sum + 1;
}
return sum;
}
 
 
var result = floatValue([NaN, 23.1, 15, false, -22.5, ' ', 4, 7, null]);
console.log (result);