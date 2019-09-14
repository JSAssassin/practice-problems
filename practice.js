function frequencyAnalysis (string) {
    string = string.toLowerCase();
    let objFreq = {};
    for (let i = 0; i < string.length; i++) {
    //   let count = 0;
    let letter = string[i]
    console.log(letter);
    if(objFreq[letter] === undefined) {
        objFreq[letter] = 1;
    } else {
        objFreq[letter] += 1;
    }
    console.log(objFreq[letter]);
    //   if ()
    }
    console.log(objFreq);
    return objFreq;
}

frequencyAnalysis('Tassshi');

