// Given 2 arrays that are sorted [0, 3, 4, 31] and [4, 6, 30]. Merge them and sort [0,3,4,4,6,30,31] ?

function MergeandSort(arr1, arr2) {
  let resultantArray = arr1.concat(arr2).sort((a, b) => a - b);
  return resultantArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

console.log("sorted merged array ", MergeandSort(arr1, arr2));
