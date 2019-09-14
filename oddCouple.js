function oddCouple(arrayNum) {
    let oddArray = [ ];
    for (let i = 0; i<arrayNum.length; i++) {
      if(oddArray.length < 2 && arrayNum[i] % 2 === 1) {
        oddArray.push(arrayNum[i]);
      }
    }
    
    return oddArray; // or leave out the condition < 2 and at the end return oddArray.slice(0,2)
  }