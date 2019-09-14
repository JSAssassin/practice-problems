function mostVowels(aSentence) {
    let listOfWords = aSentence.split(' ');
    let maxVowels = 0;
    let maxWord = "";


    console.log(listOfWords);


    for (let i = 0; i < listOfWords.length; i++) {
        let currentWord = listOfWords[i];
        let numberOfVowelsInCurrentWord = countVowelsInWord(currentWord);
        console.log(`Word:${currentWord}, Vowels: ${numberOfVowelsInCurrentWord}`);
        if (numberOfVowelsInCurrentWord > maxVowels) {
            maxWord = currentWord;
        }

    }

    return maxWord;
}

// tree -> 2
// can -> 1
// countVowelsInWord("can") -> 1
function countVowelsInWord(word) {
    let vowelsList = 'aeiouAEIOU';
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        let currentChar = word[i];
        for (let j = 0; j < vowelsList.length; j++) {
            if (currentChar === vowelsList[j]) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}

console.log(countVowelsInWord('tree'));


console.log(mostVowels('this is a sentence.'));

// // describe('mostVowels', () => {

// //     it('is a function', () => {
// //       expect(typeof mostVowels).toEqual('function');
// //     });

// //     it('returns a string', () => {
// //       let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
// //       expect(typeof returnedValue).toEqual('string');
// //     });

// //     it('returns the word with the most vowels', () => {
// //       let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
// //       expect(returnedValue).toEqual('measure');
// //     });

// //     it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
// //       let returnedValue = mostVowels('Give her hell from us, Peeves.');
// //       expect(returnedValue).toEqual('Peeves');
// //     });

// //     it('returns an empty string if none of the inputted words have vowels', () => {
// //       let returnedValue = mostVowels('why dry my sly lynx?');
// //       expect(returnedValue).toEqual('');
// //     });

// //   });