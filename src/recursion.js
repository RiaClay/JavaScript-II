// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  let nthFib = 0;
  if (n < 2) {
    return n;
  }
  nthFib = nFibonacci(n - 2) + nFibonacci(n - 1);
  return nthFib;
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  const newNum = n - 1;
  if (n === 1) {
    return n;
  }
  return n * nFactorial(n - 1);
};


/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};
