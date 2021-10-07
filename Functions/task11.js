/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/

function addstring(a,b) {
    var c = " ";
    while (a>0) {
        c = c + b;
        a = a - 1;
    }
    return c;
}
 result = addstring(4,"abc ");
 console.log (result);
