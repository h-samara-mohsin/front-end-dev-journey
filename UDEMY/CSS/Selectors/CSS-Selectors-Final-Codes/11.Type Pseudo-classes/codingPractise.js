function SecondHighestSalary(salaries) {
  if (salaries.length < 2) {
    return "null";
  }

  const uniqueSalary = [...new Set(salaries)];
  uniqueSalary.sort((a, b) => b - a);

  return uniqueSalary[1];
}

const mysalaries = [1000, 2000, 25000, 4000];

const result = SecondHighestSalary(mysalaries);

if (result !== null) {
  console.log(`the sec highest slary is: ${result}`);
} else {
  console.log("not enough unique salaries to print second highst salary");
}
