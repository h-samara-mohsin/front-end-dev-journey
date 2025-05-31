const arr = [55, 78, 90, 3, 56, 1, 3, 200];

// to find second largest element

/*
const sortedArray = arr.sort((a, b) => {
  return b - a;
});

console.log("sortedArray", sortedArray);

const SecLargestEle = sortedArray[1];
console.log("SecLarge stEle:", SecLargestEle);
*/

// second method to do the same
/*
find the largest value from array
find index of largest value
delete index from array using spice method
apply same logic that you use to find largest value
*/

/*
array.splice(start, deleteCount, item1, ..., itemN)
let myArray = ['apple', 'banana', 'cherry', 'date'];

// Remove 1 element starting at index 2
let removed = myArray.splice(2, 1);
// myArray is now ['apple', 'banana', 'date']
// removed is ['cherry']

// Add elements without removing any
myArray.splice(2, 0, 'grape', 'kiwi');
// myArray is now ['apple', 'banana', 'grape', 'kiwi', 'date']

// Replace 2 elements starting at index 1
removed = myArray.splice(1, 2, 'mango', 'orange');
// myArray is now ['apple', 'mango', 'orange', 'kiwi', 'date']
// removed is ['banana', 'grape']
*/
const largestValue = (arr) => {
  const firstlargestValue = Math.max(...arr);
  const index = arr.indexOf(firstlargestValue);
  arr.splice(index, 1);
  const secondLargestValue = Math.max(...arr);
  return secondLargestValue;
};

console.log("secondLargestValue: ", largestValue(arr));
