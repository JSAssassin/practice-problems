function zooInventory(anArray) {
    let result = [];
    for (let i = 0; i < anArray.length; i++) {
      let currentElement = anArray[i];
      let name = currentElement[0];
      let typeOfAnimal = currentElement[1][0];
      let age = currentElement[1][1];
      
      result.push(`${name} the ${typeOfAnimal} is ${age}.`);
    }
  
    
    return result;
  }