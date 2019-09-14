let stringToArray = function (string) {
    let stringLowerCase = string.toLowerCase();
    let stringCommaRemoved = stringLowerCase.replace(/\,/g,"");
    console.log(stringCommaRemoved.split(' '));

    return stringCommaRemoved.split(' ');
}


let generateMarkovChain = function (array) {
    let wordPairs = {};
    for (let i = 0; i < array.length; i++) {


        wordPairs[array[i]] = [array[i + 1]];

    }


    console.log(wordPairs);
    return wordPairs;

}

let array = stringToArray("Ever since I left the city, you, you, you You and me we just don't get along");

generateMarkovChain(array);