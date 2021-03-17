 /*1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.

   2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */

var day="6"
switch (day) {
    case "1":
        console.log ("Monday");
    case "2":
        console.log ("Tuesday");
    case "3":
        console.log ("Wednesday");
    case "4":
        console.log ("Thursday");
    case "5":
        console.log ("Friday");
    case "6":
        console.log ("Saturday");
    case "7":
        console.log ("Sunday");
    default:
        console.log ("Input must be a number between 1 and 7");
        break;
}