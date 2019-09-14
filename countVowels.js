/*function countVowels (string) {
    let vowelCount = 0;
    if(string.length === 0) {
      return vowelCount;
    }
    let vowel = 'aeiouAEIOU';
    let lastChar = string.charAt(string.length - 1);
    if(vowel.includes(lastChar)){
      vowelCount ++;
    }
    let newString = string.substring(0, string.length-1);
    return vowelCount + countVowels(newString);
}*/




function countVowels (string) {
    let vowelCount = 0;
    if(string.length === 0) {
      return vowelCount;
    }
    let vowel = 'aeiouAEIOU';
    let lastChar = string.charAt(string.length - 1);
    if(vowel.includes(lastChar)){
      vowelCount ++;
    }
    let newString = string.substring(0, string.length-1);
    return vowelCount + countVowels(newString);
}

countVowels('life is like a box of chocolates');