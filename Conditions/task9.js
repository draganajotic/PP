/* Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

Output : - Output : true Output : true
*/
var prvi = 40;
var drugi = 10;
if ( prvi === 50 || drugi === 50 || (prvi + drugi) === 50) {
    console.log ("true");
} else {
    console.log ("-");
}