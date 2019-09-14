function bacteriaTime (currentNum, targetNum) {
    if (currentNum > targetNum) return 'targetNum must be larger than currentNum';
    let time = 0;
    while ( currentNum < targetNum ) {
      currentNum *= 2;
      time += 20;
    }
    return time;
}

console.log(bacteriaTime(3, 6000));