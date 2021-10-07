/* 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3
*/
function integer (array) {
var sum = 0;
for (var i = 0; i < array.length; i++){
    var next = parseFloat(array[i]);
if ( isFinite(next) && next === parseInt(array[i])){
 sum = sum + 1;
}
}
return sum;

}
console.log(integer([NaN, 23.1, 15, false, -22.5, ' ', 4, 7, null]));