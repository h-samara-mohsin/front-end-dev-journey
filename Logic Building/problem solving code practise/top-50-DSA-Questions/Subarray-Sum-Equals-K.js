/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/

var subArraySum = function (nums, k) {
  let hashMap = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let complement = k - nums[i];
    if (hashMap.hasOwnProperty(complement)) {
      count += 1;
    } else if (nums[i] === k) {
      count += 1;
    } else {
      hashMap[nums[i]] = i;
    }
  }
  return count;
};

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

let nums = [1, 1, 1];
let k = 2;
console.log(
  "Example 1: possible subArrays from nums whose sum = k=2 are: ",
  subArraySum(nums, k)
);

let nums2 = [1, 2, 3];
let k2 = 3;
console.log(
  "Example 1: possible subArrays from nums whose sum = k=2 are: ",
  subArraySum(nums2, k2)
);
