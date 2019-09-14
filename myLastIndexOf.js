/*function myLastIndexOf(array, searchValue, endIdx){
    if(endIdx === undefined){
      endIdx = array.length - 1;
    }
    
    // we haven't found anything yet
    let lastIndexOfSearchValue = -1;
  
    for(let i=0; i<=endIdx; i++){
      let currentElement = array[i];
    //   console.log(currentElement);
    //   console.log(searchValue);
      if(searchValue === currentElement){
        lastIndexOfSearchValue = i;
      }
    }
    
    return lastIndexOfSearchValue;
  }*/
// Soultion 2

  function myLastIndexOf(array, searchValue, endIdx){
    if(endIdx === undefined){
      endIdx = array.length - 1;
    }
    
    for(let i = endIdx; i >= 0; i--) {
      if(searchValue === array[i]) {
        return i;
      }
    }
  
    return -1;
  }

  console.log(myLastIndexOf([2,10,5,6,6,5,10,20], 10, 6));
