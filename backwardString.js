/*Backward String
Write a function, backwardString, that receives a string. It should log every letter in the string, from the last character to the first. Use recursion.

NOTE: As with the last problem, the tests will check how many times console.log is called.

backwardString('happy');
// y
// p
// p
// a
// h
*/




function sumDigits(num) {
  let int = parseInt(num);
  let sum = 0;
  if (int < 0) {
    return sum;
  }
  let str = int.toString();
  let lastDigitInStr = str[str.length - 1];
  let lastDigitToNumber = Number(lastDigitInStr);

  sum += lastDigitToNumber;
  let newStr = str.substring(0, str.length - 1);
  let newInt = Number(newStr)
  return sum + sumDigits(newInt);
}

backwardString('hello');