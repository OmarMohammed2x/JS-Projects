function factorial(num) {
  let solution = 1;
  if (num === 0) {
    solution = 1;
  } else {
    for (let i = 1; i <= num; i++) {
      solution *= i;
    }
  }
  return solution;
}
console.log(factorial(10));

// or

function factorial2(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial2(num - 1);
  }
}
console.log(factorial2(10));
