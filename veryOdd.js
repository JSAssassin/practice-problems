function veryOdd (array){
    let newArray = [];
    for (let i=0; i<array.length; i++) {
      let currentNumber = array[i];
      if (currentNumber%2) {
        newArray.push(currentNumber);
      }
    }
    return newArray;
  }


//veryOddMutant

function veryOddMutant (array) {
    let count = 0;
    for (let i = 0; i<array.length; i++) {
      let currentNumber = array[i];
      if(array[i]%2 === 0) {
        count++;
        array[i] = 'normie';  
      }
    }
    return count;
  }
  
  