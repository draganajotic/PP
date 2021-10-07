/*1. Write a program that calculates the maximum of two given numbers. */

function max(a, b) {
    if (a > b) {
        return a;
    } if (a === b) {
        return "Numbers are equal";
    }
    return b;

}
var result = max(56, 22);

console.log(result)