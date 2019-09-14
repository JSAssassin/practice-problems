let animalNoises = [
    {
        'dog': {
            'America': 'Woof! Woof!',
            'Germany': 'Wau Wau!',
            'England': 'Bow wow!',
            'Uruguay': 'Jua jua!',
            'Afrikaans': 'Blaf!',
            'Korea': 'Mong mong!',
            'Iceland': 'Voff voff!',
            'Albania': 'Ham!',
            'Algeria': 'Ouaf ouaf!'
        }
    },
    {
        'cat': {
            'America': 'Meow',
            'Germany': 'Miauw!',
            'England': 'mew mew',
            'Uruguay': 'Miau Miau!',
            'Afrikaans': 'Purr',
            'Korea': 'Nyaong!',
            'Iceland': 'Kurnau!',
            'Albania': 'Miau',
            'Algeria': 'Miaou!'
        }
    },
    {
        'chicken': {
            'America': 'Cluck cluck',
            'Germany': 'tock tock tock',
            'England': 'Cluck Cluck',
            'Uruguay': 'gut gut gdak',
            'Afrikaans': 'kukeleku',
            'Korea': 'ko-ko-ko',
            'Iceland': 'Chuck-chuck!',
            'Albania': 'Kotkot',
            'Algeria': 'Cotcotcodet'
        }
    }
];
// YOUR CODE BELOW
function petSounds(animalName, countryName) {
    let result = '';
    let animalType = '';
    let sound = '';
    for (let i = 0; i < animalNoises.length; i++) {
        if (animalName in animalNoises[i]) {
            sound = animalNoises[i][animalName][countryName];
        }
    }
    if (animalName === "dog") {
        animalType = "Dogs";
    } else if (animalName === "cat") {
        animalType = "Cats";
    } else if (animalName === "chicken") {
        animalType = "Chickens";
    }
    result += `${animalType} in ${countryName} say ${sound}`;
    return result;
}

petSounds('dog', 'Korea');


// Solution 2
function petSounds (animal, country) {
    let sound = '';
    for (let i = 0; i < animalNoises.length; i++) {
      if(animalNoises[i][animal] !== undefined) {
        sound += animalNoises[i][animal][country];
      }
    }
    let newAnimalName = animal.charAt(0).toUpperCase() + animal.substring(1) + 's';
    return `${newAnimalName} in ${country} say ${sound}`;
  }
  
