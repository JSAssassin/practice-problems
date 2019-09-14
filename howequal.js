/*function howEqual(type1, type2) {
  let result = "";
  if (type1 === type2) {
    result += 'strictly';
  } else if (type1 == type2) {
    result += 'loosely';
  } else if(type1 !== type2){
    result += 'not equal'
  }

  return result;
}*/

//console.log(howEqual(0 === -1, false));

//console.log(typeof(0===-1));
//console.log(typeof(false));


function howEqual(typeOne, typeTwo) {
  if (typeOne === typeTwo) {
    return 'strictly';
  } 
  if (typeOne == typeTwo) {
    return 'loosely';
  }
  
  return 'not equal';
  
}
