function partial (callback, a) {
    return function (b) {
      return callback(a,b);
    }
  }

// function doSomething(a, b) {
//     return `${b} is ${a}`
// }

// function doSomething2(a) {
//     return function (b) {
//         return `${b} is ${a}`;
//     }
// }

// let test = doSomething2(10)

// let answer = test("Bill");

// console.log(answer);