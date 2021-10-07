/*7. Write a program that calculates a number of digits of a given number.
*/

function numOfDigits (num) {
    var counter = 0;
    for (var i = num; i >= 1; i = i / 10) {
        counter++;
    }
    return counter;
}
 var result = numOfDigits(45000);
    console.log(result);