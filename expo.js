function exponentiate(base, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
      result += base ** i;
    }
    return result;
}

console.log(exponentiate(2, 3));