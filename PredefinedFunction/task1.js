//1. Write a function that converts an array of strings into an array of numbers. Filter
// out all non-numeric values.
// Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
// Output: [1, 21, 42, 1000]

function convertStringsToNums (array) {
    var transformedArray = [];
for (var i=0; i<array.length; i++) {
    var currentValue = array[i];
    var isValid = isFinite(currentValue);
    if(isValid) {
        var number = parseFloat(currentValue);
        transformedArray[transformedArray.length] = number;
    }
}
    return transformedArray;
}


console.log(convertStringsToNums(["1", "21", undefined, "42", "1e+3", Infinity]));
    