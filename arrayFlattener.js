function arrayFlattener (anArray) {
    let result = [];
    for (let i = 0; i < anArray.length; i++){
      let currentElement = anArray[i];
    //   console.log("i-"+currentElement);
      if(Array.isArray(currentElement )){
        for(let j=0; j < currentElement.length; j++){
        //   console.log("j- "+currentElement[j]);
          result.push(currentElement[j]);
        //   console.log('after pushing currentElement[j]',result);
        }
      } else {
        result.push(currentElement);
      }
    } 
    return result;
  }

  console.log(arrayFlattener([2,[3,4],6]));

  function arrayFlattener2(twoDimensionalArray) {
    let flatArray = [];
  
    for (let i = 0; i < twoDimensionalArray.length; i++) {
      let element = twoDimensionalArray[i];
  
      // if the element is an array...
      if (Array.isArray(element)) {
  
        // ...just concat the array onto flatArray
        flatArray = flatArray.concat(element);
      }
      else {
        flatArray.push(element);
      }
    }
  
    return flatArray;
  }