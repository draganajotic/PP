/* Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
*/
var br = 7;
if (typeof br == "number" && br % 2 == 0) {
    console.log (br + " /2 = 5");
} else {
    console.log ("x");
}