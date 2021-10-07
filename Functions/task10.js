/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/
function numOfAInString(string, a){
    var charCounter = 0;
    for ( var i=0; i<string.length; i++) {
        var currentChar = string [i];

        if (currentChar === 'a' || currentChar === "A"){
            charCounter++;
        }
    }   return charCounter;
} 
console.log(numOfAInString ("blablA"));