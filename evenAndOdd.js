
  function evenAndOdd (anArray) {
    let oddArray = [];
    let evenArray = [];
    
    for (let i = 0; i < anArray.length; i++) {
      let currentElement = anArray[i];
      if ( currentElement % 2) {
        oddArray.push(currentElement);
      } else {
        evenArray.push(currentElement);
      }
    }
      
    return [evenArray, oddArray];
  }

  