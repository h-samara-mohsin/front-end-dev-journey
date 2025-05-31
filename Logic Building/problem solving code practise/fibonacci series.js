console.log("fibonacci series question: ");

function fibonacci(num) {
  let series = [0, 1];

  for (let i = 2; i < num; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(-5));
