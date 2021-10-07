 /*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
 */
 
 a = [2,7,7,8,7,7,1]
function niz(e) {
    var sum=0;
    for (i=0; i<a.length; i++){
    if (e===a[i]){
     sum = sum + 1
    } 
    }    return sum;
}
result=niz(7);
console.log (result);