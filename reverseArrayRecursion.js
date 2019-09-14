/*Reverse Array
Write a function, reverseArray, that accepts an array and returns a reversed copy of that array. Use recursion.

let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]*/

function reverseArray(arr) {
    let anArray = arr.slice(0);
    let result = [];
    if (anArray.length === 0) {
        return result;
    }
    let lastElementOfArray = anArray.pop();
    result.push(lastElementOfArray);
    console.log(anArray);


    return result.concat(reverseArray(anArray));

}

reverseArray([1, 2, 3, 4]);