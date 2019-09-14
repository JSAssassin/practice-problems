// function deeperCopy (array) {
//   let copy = array.concat();
//   return copy;
// }

function deeperCopy (arr) {
    debugger;
    let copy = [];
    for (let i=0; i<arr.length; i++) {
      if (Array.isArray(arr[i])){
        copy.push(deeperCopy(arr[i]));
      } else {
        copy.push(arr[i]);
      }
    }
    return copy;
  }

deeperCopy([1,2,3]);