// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

function findString (array){
    let newArray = [];
    currentElement = '';
    for (let i = 0; i < array.length; i++) {
        currentElement = array[i];
        for (let j = 0; j < currentElement.length; j++) {
            if (currentElement [j] === 'j' || currentElement[j] === 'J') {
                if (currentElement[j + 1] === 's' || currentElement[j + 1] === 'S'){
                    newArray.push(currentElement);
                }
            }
        }
    } return newArray
} console.log(findString(['compiler', 'tranJSpiler', 'babel.js', 'JS standard', 'linter']));
