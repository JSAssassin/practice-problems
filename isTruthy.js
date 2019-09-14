/*function isTruthy(arg) {
    if (arg) {
        return true;
    } else if (arg === false) {
        return 'The boolean value false is falsey';
    } else if (arg === undefined) {
        return 'undefined is falsey';
    } else if (arg === null) {
        return 'The null value is falsey';
    } else if (arg === 0) {
        return 'The number 0 is falsey (the only falsey number)';
    } else if (arg === '') {
        return 'The empty string is falsey (the only falsey string)';
    }
}*/


//OR ---------------------------------------

/*function isTruthy(arg) {
    if (arg === false) {
      return "The boolean value false is falsey";
    } else if (arg === undefined) {
      return "undefined is falsey";
    } else if (arg === null) {
      return "The null value is falsey";
    } else if (arg === 0) {
      return "The number 0 is falsey (the only falsey number)";
    } else if (arg === "") {
      return "The empty string is falsey (the only falsey string)";
    } else {
      return true;
    }
  }*/

  //OR ------------------------------------

  function isTruthy(arg) {
    if (arg === false) return "The boolean value false is falsey";
    if (arg === undefined) return "undefined is falsey";
    if (arg === null) return "The null value is falsey";
    if (arg === 0) return "The number 0 is falsey (the only falsey number)";
    if (arg === "") return "The empty string is falsey (the only falsey string)";
    return true;
  }

  //Could also use switch statement


