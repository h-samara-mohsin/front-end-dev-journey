let arr = [3, 1, 67, 89, 12390, 5, 1000, 7, 9];

function findBoundaries(arr) {
  let maxEle;
  let minEle;
  const sortedArray = arr.sort();
  console.log(sortedArray);
  // for(let i=0; i<sortedArray.length ; i++){
  // }
  maxEle = sortedArray[0];
  minEle = sortedArray[sortedArray.length - 1];

  console.log("max: ", maxEle);
  console.log("min ele: ", minEle);
}

findBoundaries(arr);

// good practise

const findMax = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
  });
};

console.log("max element of array:", findMax(arr));

const findMin = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
  });
};

console.log("min element of array: ", findMin(arr));
