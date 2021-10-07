// 1. Write a function that capitalizes the first letter of each string argument it receives.  
// 	Function arguments: ['hello', 'there', 'ES', 6]
// 	Output: ['Hello', 'There', 'ES']

function uppFirst(array){
    newArray = [];
    for ( let i = 0; i < array.length; i++) {
        if ( typeof array[i] === 'string'){
            `${array[i].charAt(0).toUpperCase()}${array[i].slice(1)}`;
            //  array[i].charAt(0).toUpperCase() + array[i].slice(1)
            newArray[newArray.length] = array[i];
        } else {
            continue
        } 
    }return newArray;
} console.log (uppFirst(['Hello', 'There', 'ES', 6, 'Dragana']));