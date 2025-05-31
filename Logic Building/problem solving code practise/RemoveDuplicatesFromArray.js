function RemoveDuplicates(arr) {
  // Method 1:
  // 1.set = new Set(arr)
  // 2.convert to array aur spread operator se set k saare elements ko spread krdo
  // 2-ii: [...]
  let uniqueArray = [...new Set(arr)];
  console.log("uniqueArray: ", uniqueArray);
}

let array = [1, 2, 3, 2, 4, 1, 5];
console.log(array);
console.log(RemoveDuplicates(array));

// METHOD 2: filter and index of()
function removeDuplicate2(arr) {
  return arr.filter((ele, index, array) => array.indexOf(ele) === index);
}
console.log("2nd method to solve problem");
let array2 = [1, 2, 3, 2, 4, 1, 5, 5, 5, 7];
console.log(array2);
console.log("2nd mthod answer: ", removeDuplicate2(array2));

