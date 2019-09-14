let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#', 'l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'", '><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(aString) {
    let leet = {};
    let result = '';

    for (let i = 0; i < letters.length; i++) {
        leet[letters[i]] = leetChars[i];
    }

    for (let i = 0; i < aString.length; i++) {
        result += leet[aString[i].toLowerCase()]; //------> we can even make convert the string passed toLowerCase() in the beginning itself 
        //------> let newString = aString.toLowerCase(); & change aString to newString wherever it's necessary
    }
    return result;
}

console.log(leetTranslator('Tashi'));

