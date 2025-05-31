function factorial(n) {
  fact = 1;
  if (n < 0) {
    console.log("fact of neg num is ot possible");
    return false;
  } else {
    for (let i = 1; i <= n; i++) {
      fact = fact * i;
    }
  }
  return fact;
}

console.log("factorqil of 5 without recursive:", factorial(5));
console.log("factorqil of 0 without recursive:", factorial(0));
console.log("factorqil of -10 without recursive:", factorial(-10));
console.log("factorqil of 8 without recursive:", factorial(8));

// write it with recursive logic

function factorial2(n) {
  if (n < 0) {
    console.log("fact of neg num is not possible");
    return false;
  }

  if (n === 0) {
    return 1;
  }
  let fact = n;
  return fact * factorial2(n - 1);
}

console.log("recursive factorial of 5 output: ", factorial2(5));
console.log("recursive factorial of 0 output: ", factorial2(0));
console.log("recursive factorial of -5 output: ", factorial2(-5));
console.log("recursive factorial of 8  output: ", factorial2(8));
