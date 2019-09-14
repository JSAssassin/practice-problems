function mySlice(originalArray, startIdx = 0, endIdx = originalArray.length) {
    console.log("-----------")

  let result = [];

  
  if (startIdx < 0){
    // -1,  -3
    startIdx = originalArray.length +  startIdx;
  
  }
  
  if(  endIdx < 0) {
    endIdx = originalArray.length +  endIdx;
  }
  
  if(endIdx < startIdx) {
    return result;
  }

  console.log(`start: ${startIdx}, end: ${endIdx}, len: ${originalArray.length}`)
  for (let i = startIdx; i < endIdx; i++) {
    let currentElement = originalArray[i];
    result.push(currentElement);
  }

  return result;
}