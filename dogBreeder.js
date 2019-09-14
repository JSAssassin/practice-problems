function dogBreeder(dogName = 'Steve',dogAge = 0) {
    let newDog = {};

    if (typeof (dogName) === 'number') {
        dogAge = dogName;
        dogName = 'Steve';

    }
    newDog['name'] = dogName;
    newDog['age'] = dogAge;

   

    return newDog;
}

console.log(dogBreeder('Tashi',10));