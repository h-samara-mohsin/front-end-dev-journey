// Problem: Find the Row with the Most 1s in a 2D Binary Matrix
/*
const matrix = [
  [0, 0, 1, 1],  // index 0 → 2 ones
  [0, 1, 1, 1],  // index 1 → 3 ones
  [0, 0, 0, 1],  // index 2 → 1 one
  [1, 1, 1, 1]   // index 3 → 4 ones ✅
];
*/

const RowWithMaxOnes = (matrix) => {
  let maxCount = 0;
  let rowIndex = -1;
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        rowIndex = i;
      }
    }
  }
  return rowIndex;
};

const matrix1 = [
  [0, 0, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 1],
  [1, 1, 1, 1],
];
console.log(RowWithMaxOnes(matrix1)); // Expected: 3

const matrix4 = [[1, 1, 1, 1]];
console.log(RowWithMaxOnes(matrix4)); // Expected: 0
