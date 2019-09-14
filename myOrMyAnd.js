function myOr(arg1, arg2, arg3) {
    if (arg1) return arg1;
    if (arg1 !== true && arg2) return arg2;
    if (arg1 !== true && arg2 !== true && arg3) return arg3;
    else return arg3;
}

function myAnd(arg1, arg2, arg3) {
    if (!arg1) return arg1;
    if (arg1 === true && !arg2) return arg2;
    if (arg1 === true && arg2 === true && !arg3) return arg3;
    else return arg3;
}

console.log(myAnd());

/* function myOr(argOne, argTwo, argThree) {
  if (argOne) {
    return argOne;
  }
  else if (argTwo) {
    return argTwo;
  } 
  else if (argThree) {
    return argThree;
  } 
  else {
    return argThree;
  }
}
function myAnd(argOne, argTwo, argThree) {
  if (!argOne) {
    return argOne;
  }
  else if (!argTwo) {
    return argTwo;
  } 
  else if (!argThree) {
    return argThree;
  } 
  else {
    return argThree;
  }
}*/

/*
function myOr(a,b,c){
    return a || b || c;
}

function myAnd(a,b,c){
  return a && b && c;
}
 */