/*3. Write a program that checks if a given number is a three digit long number.
*/

function number (a) {
    if ( a>99 && a<1000){
 return "Number is three digit long.";
} else {
    return "The number is not three digit long."
}
}
    result = number (70);
    console.log (result);
