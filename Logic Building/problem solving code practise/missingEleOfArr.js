const arr = [1, 3, 5, 7, 8, 9, 10];

const findMissingEle = (arr) => {
  missingEle = [];
  const maxValue = Math.max(...arr);
  console.log(maxValue);
  const minValue = Math.min(...arr);
  console.log(minValue);

  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missingEle.push(i);
      console.log(i);
    }
  }
  return missingEle;
};

console.log(findMissingEle(arr));
