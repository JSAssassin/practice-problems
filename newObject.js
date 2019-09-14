let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];
  
  // YOUR CODE BELOW
  function petSounds (animal, country) {
    animalLowerCase = animal.toLowerCase();
    let sound = '';
    for (let i = 0; i < animalNoises.length; i++) {
        let soundObj = animalNoises[i][animalLowerCase];
        if (soundObj !== undefined) {
            sound += animalNoises[i][animalLowerCase][country];
            console.log(sound);
        }
       
    }
    console.log(`${animal} in ${country} say ${sound}`);
    return `${animalLowerCase} in ${country} say ${sound}`;
  }
  

petSounds('Dog', 'America');