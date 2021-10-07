// Write a function that increases each element of the given array by the given value. If the value is omitted, increase each element of
//  the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

function elementIncrease (array, n){
  let newAraay = [];
    for (let i = 0; i < array.length; i++){
      if ( !!n === false ){
        newAraay[newAraay.length] = array[i] + 1
      } else {

      newAraay[newAraay.length] = (array[i] + n);
      };
    } return newAraay
};
console.log(elementIncrease([4, 6, 11, -9, 2.1], 2))