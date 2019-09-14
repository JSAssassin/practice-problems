function stringify (callback) {
    return function () {
      let value = callback().toString();
      return value;
    }
  }