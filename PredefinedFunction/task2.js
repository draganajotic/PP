/*2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247” */

function choosenElements (array){
    var newstring = " ";
    for (var i = 0; i<array.length; i++){
    if (array[i] === null) {
    continue;
    }
    var elements = isFinite(array[i]);
    if (elements) {
    newstring = newstring + array[i];
}
    }
    return newstring;

}
    console.log(choosenElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

