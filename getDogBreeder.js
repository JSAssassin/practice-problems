function getDogBreeder(defaultName, defaultAge) {
  let dogBreeder = function (dogName = defaultName, dogAge = defaultAge) {
    let newDog = {};
    if (typeof (dogName) === 'number') {
      dogAge = dogName;
      dogName = defaultName;
    }

    newDog['name'] = dogName;
    newDog['age'] = dogAge;

    return newDog;
  }

  return dogBreeder;
}
let x = getDogBreeder();
console.log(x());