function myReverse (anArray) {
    let reverseArray = [];
    for(let i=anArray.length-1; i>=0; i--) {
      reverseArray.push(anArray[i]);
    }
    
    return reverseArray;
  }

  function myReverse2(originalArray) {
    let reversedArray = [];
  
    // while the length of originalArray is greater than 0
    while (originalArray.length) {
  
      /*
        pop elements off the end of the original array and immediately
        push them into the reversedArray
      */
      reversedArray.push(originalArray.pop())
    }
  
    return reversedArray
  }