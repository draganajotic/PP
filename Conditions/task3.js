/* Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/
var a = -1;
var b = 0;
var c = 4;
if (a>b && a>c && a>c) {
    console.log (a, b, c);
} else if (b>a && b>c && a>c) {
    console.log (b, a, c);
} else if (c>a && c>b && a>b) {
    console.log (c, b, a);
} else if ( a>c && a>b && c>b) {
    console.log (a, c, b);
} else {
    console.log (b, c, a);
}