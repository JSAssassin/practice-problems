/*Sum Nums
Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

sumNums(3); // => 6 (3 + 2 + 1)*/

function sumNums (number) {
        let total = 0;
        if(number < 1){
          return total;
        }
        
        total += number;
        console.log('this is total', total);
        console.log('this is number', number);
      
      
        return total + sumNums(number-1);
        
      }

sumNums(5);