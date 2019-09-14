function myJoin(array, separator = ",") {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
            result += "";
        } else {
            result += array[i];
        }
        if (i < array.length - 1) {
            result += separator;
        }
    }

    return result;
}

function myJoin2(array, separator) {

    // if the separator isn't defined, set it as a comma
    if (separator === undefined) {
      separator = ",";
    }
  
    // create a string value onto which we can concatenate each element from the array
    let joinedString = '';
  
    // loop through the entire array
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
  
      // unless this is the first element in the array...
      if (i !== 0) {
  
        // ...add the separator to the joinedString
        joinedString += separator;
      }
  
      // if the current element is neither defined nor null...
      if (element !== undefined && element !== null) {
  
        // ...add the element to the joinedString
        joinedString += element;
      }
    }
  
    // return the joinedString after the for loop
    return joinedString;