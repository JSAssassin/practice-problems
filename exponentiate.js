function exponentiate (baseNumber, powerNumber) {
    //return baseNumber ** powerNumber; easy solution
    let result = 1;
    for(let i = 0; i < powerNumber; i++){
      result *= baseNumber; 
    }
    return result;
  }

  console.log(exponentiate(3,6));