/*
Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.

Examples:

Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

Input: arr[] = {-2, -4}
Output: -2
Explanation: The subarray {-2} has the largest sum -2.

Input: arr[] = {5, 4, 1, 7, 8}
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.

Try it on GfG Practice
*/

let MaximumSubarraySum = (nums) => {
  if (nums.length == 0) {
    return 0;
  }
  let currMax = nums[0];
  let currMin = nums[0];
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num < 0) {
      [currMax, currMin] = [currMin, currMax];
    }
    currMax = Math.max(num, num + currMax);
    currMin = Math.min(num, num - currMin);
    result = Math.max(result, currMax);
  }
  return result;
};

// Examples:

// Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

let arr = [2, 3, -8, 7, -1, 2, 3];
console.log(arr);
console.log("MaximumSubarraySum: ", MaximumSubarraySum(arr));
