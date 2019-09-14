/*function myUnshift(anArray, aValue) {
    let result = [aValue].concat(anArray);
    return result;
} ------> Easy Solution*/

// Second Solution
function myUnshift2(anArray, aValue) {
    let result = [aValue];
    for (let i = 0; i < anArray.length; i++) {
        result.push(anArray[i]);
    }
    return result;
}