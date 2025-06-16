const removeDuplicates = (arr) => {
  return arr.filter((ele, index, arr) => {
    // return arr.indexOf(ele) !== index;
    return arr.indexOf(ele) === index;
  });
};

const findDuplicates = (arr) => {
  return arr.filter((ele, index) => {
    return arr.indexOf(ele) !== index;
  });
};

const array = [1, 2, 2, 3, 4, 4, 5];
console.log("unique elements: ", removeDuplicates(array));
console.log("duplicates found from array: ", findDuplicates(array));
