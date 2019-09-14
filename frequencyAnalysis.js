function frequencyAnalysis(string) {
    debugger;

    let stringLowerCase = string.toLowerCase();
    let result = {};
    for (let i = 0; i < stringLowerCase.length; i++) {
        let currentChar = stringLowerCase[i];
        if(result[currentChar]){
            result[currentChar]++;
        } else{
            result[currentChar] = 1;

        }
    }

    return result;
}

console.log(frequencyAnalysis('Taashii'));
