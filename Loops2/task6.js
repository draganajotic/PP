/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
/* var a = [2, 4, -2, 7, -2, 4, 2];
var result = " ";
for (i=0; i<a.length/2; i++)
    if (a[i]==a[a.length-1-i]) {
        result = "The array is symetric"
    } else { 
        result = "The array isn't symetric"
       
    }
   console.log (result);
/*for (j=a.length-1; j>=0; j--) {
    var c=a[j];
    } 
if (a[i] == a[j]) {
    console.log ("The array is symetric");
    } else {
    console.log ("The array isn't symetric");
    }
*/ 
var a = [2, 5, -2, 7, -2, 4, 2];
var napred = [ ];
var nazad = [ ];
var odg = " ";
for (i=0; i<a.length; i++) {
    napred[napred.length] = a[i]; }
for (j=a.length-1; j>=0; j--) {
       nazad[nazad.length] = a[j];
    }
if (napred == nazad) {
        odg = "The array is simetric."
    } else {
        odg = "The array isn't symetric."
    }
    console.log (odg);
// console.log (nazad);
// console.log (napred);