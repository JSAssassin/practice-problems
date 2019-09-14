function billerBuilder (stateName) {
    return function (price) {
      if (stateName === 'NY') {
        return price * 1.03 * 1.04;
      }
      if (stateName === 'NJ') {
        return price * 1.05 * 1.06625;
      }
    }
  }