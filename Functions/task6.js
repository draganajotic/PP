/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/

function drawing (){
    var chart = '';
    var numOfArgs = arguments.length;
    
    for (var j = 0; j < numOfArgs; j++){
        for (var i = 0; i<arguments [j]; i++) {
            chart += "*";
        }
        chart += "\n";
    }
    return chart;
}
    var result = drawing(3,5,7);
    console.log(result);