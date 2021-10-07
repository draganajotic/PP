/*9. Write a program that calculates the sum of odd elements of a given array.
*/

array = [2,3,4,5,6,1];
function odd () {
    var sum=0;
    for (i=0; i<array.length; i++){
    if (array[i] % 2 !== 0){
        sum = sum + array[i]
    }
    } return sum;
} 
    result = odd ();
    console.log (result);