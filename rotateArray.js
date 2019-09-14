function rotateArray(originalArray, rotateNum) {
    console.log("----------------------")
    if (rotateNum >= 0) {
      for (let i = 0; i < rotateNum; i++) {
              originalArray.unshift(originalArray.pop());
        console.log(originalArray)
      }
    } else {
      for (let i = rotateNum; i < 0; i++) {
        originalArray.push(originalArray.shift());
      }
    }
  
    return originalArray;
  }