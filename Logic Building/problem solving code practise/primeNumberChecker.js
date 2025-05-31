console.log("prime num checker: ");

function primeChecker(num) {
  if (num < 2) {
    return false;
  } else {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i == 0) {
        return "not a prime number";
      } else {
        return "its a prime num";
      }
    }
  }
}

console.log(primeChecker(11));
console.log(primeChecker(1));
console.log(primeChecker(16));
