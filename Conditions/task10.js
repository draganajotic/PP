/* Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/
var integ = 256;
if (integ > 20 && integ < 100) {
    console.log ("20 <=> 100");
} else if ( integ > 100 && integ < 400) {
    console.log ( "100 <=> 400");
} else {
    console.log ("-");
}