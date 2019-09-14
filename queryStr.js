function indexOf(str, queryStr) {
    //                      10          5
    for (let i = 0; i <= str.length - queryStr.length; i++){
        let charactersToCheck = str.slice(i, i + queryStr.length);
        console.log("Q: " + queryStr)
        console.log("A: " + charactersToCheck)
        if(queryStr === charactersToCheck){
            return i;
        } 
        
    }   
    return -1;
}

//                     10             5
console.log(indexOf("helloWorld", "Worldz"));