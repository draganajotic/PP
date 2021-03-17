
/*5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.*/

var month="12";
switch (month) {
    case "1":
        console.log ("Winter")
        break;
    case "2":
        console.log ("Winter");
        break;
    case "3":
        console.log ("Spring");
        break;
    case "4":
        console.log ("Spring");
        break;
    case "5":
        console.log ("Spring");
        break;
    case "6":
        console.log ("Summer");
        break;
    case "7":
        console.log ("Summer");
        break;
    case "8":
        console.log ("Summer");
        break;
    case "9":
        console.log ("Autumn");
        break;
    case "10":
        console.log ("Autumn");
        break;
    case "11":
        console.log ("Autumn");
        break;
    case "12":
        console.log ("Winter");
        break;
    default:
        console.log ("Input must be between 1 and 12");
        break;
}