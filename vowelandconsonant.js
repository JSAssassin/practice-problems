function vowelsAndConsonants(s) {
    let vowelsInS = '';
    let consonantsInS = '';
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsInS += s[i] + '\n';
        } else {
            consonantsInS += s[i];
            if (i !== (s.length - 1)) {
                consonantsInS += '\n';
            }
        }

    }
    let result = vowelsInS + consonantsInS;
    console.log(result);
    return result;
}

// function vowelsAndConsonants(str) {

//     let vowels = 'aeiouAEIOU'
//     for (var i = 0; i < str.length; i++) {
//         let letter = str.charAt(i)
//         if (vowels.includes(letter)) {
//             console.log(letter);
//         }
//     }


//     for (var i = 0; i < str.length; i++) {
//         let letter = str.charAt(i)
//         if (!vowels.includes(letter)) {
//             console.log(letter);
//         }
//     }

// }

vowelsAndConsonants('javascriptloops');
// vowelsAndConsonants(10)