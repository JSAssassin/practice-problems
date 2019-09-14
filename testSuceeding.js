
let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(_msg) {
    msg = _msg

    function doubleInner(__msg) {
      testFourMessage = __msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
debugger;
let answer = testFour('test failing');
