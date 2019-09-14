let unnecessaryWords = ['extremely', 'literally', 'actually' ];

function isUneccessaryWord(word) {
    for(let i = 0; i < unnecessaryWords.length; i++) {
        // console.log(unnecessaryWords[i]);
        if(word === unnecessaryWords[i]){
            return true; // stop
        }
    }
    // none of the ifs were true
    return false;
}

console.log(isUneccessaryWord("actually")); // true
console.log(isUneccessaryWord("nope")); // false

//  'a' === 'b'  false
//  'a' !== 'b'  true


let numberOfOverusedWords = storyWords.filter(word => {
    let count = 0;
    if (overusedWords.includes(word)){
      count = count + 1;
      return count;
    };
  })

  console.log(numberOfOverusedWords())