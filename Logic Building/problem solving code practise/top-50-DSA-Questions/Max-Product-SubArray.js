/*
Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
*/

let maxProdSubArray = (nums) => {
  if (nums.length == 0) {
    return 0;
  }
  let currMax = nums[0];
  let currMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (nums[i] < 0) {
      [currMax, currMin] = [currMin, currMax];
    }
    currMax = Math.max(num, num * currMax);
    currMin = Math.max(num, num * currMin);
    result = Math.max(result, currMax);
  }
  return result;
};

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
nums = [2, 3, -2, 4];
console.log("nums:", nums);
console.log("a subarray that has the largest product", maxProdSubArray(nums));
