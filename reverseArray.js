function reverseArray (array) {
    let copy = array.slice();
    while (array.length) {
      array.shift(); // or array.pop()
    }
    for(let i=copy.length-1; i>-1; i--) {
      array.push(copy[i]);
    }
    return array;
  }