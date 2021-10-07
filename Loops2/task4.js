/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2   $
*/

var a = [4,2,2,-1,6];
var min = a[0];
var next = a[0];
var result = " ";
for (i=0; i<a.length; i++) {
   if (a[i] < min ){
     min=a[i];
}   
 }
 // console.log (min, index );

for (i=0; i<a.length;i++) {
    if (a[i] . min && a[i] < next) {
        next = a[i]; 
    }   
            }    
    console.log (next);
