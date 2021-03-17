

/*  8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero! */

var a=12;
var b=0;
var operation = "/";
var result;
switch (operation) {
    case "+":
        console.log (a+b);
        break;
    case "-":
        console.log (a-b);
        break;
    case "*":
        console.log (a*b);
        break;
    case "/":
        b!==0 ? 
        console.log ("a/b") : 
        console.log ("Can not divide by 0");
        break;
    default:
        break;
}