function rightTriangle(rows) {
    let result = '';
    for(let i=5; i > 0; i--) {
        for(let j=i; j > 0; j--){
            result += '*';

        }  
        result += '\n';
    }

    console.log(result);
    return result;
} 

rightTriangle(5);

