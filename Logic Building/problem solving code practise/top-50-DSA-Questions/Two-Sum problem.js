/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
console.log("Two Sum Probem: ");
// case1
let nums = [3, 2, 4];
let target = 6;

// case 2
let nums2 = [2, 7, 11, 15];
let target2 = 9;

let twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }
};
console.log("nums array: ", nums);
console.log("target: ", target);

console.log(
  "indexes of two numbers whose sum is equal to target = ",
  twoSum(nums, target)
);

console.log("nums2 array: ", nums2);
console.log("target2: ", target2);

console.log(
  "indexes of two numbers whose sum is equal to target = ",
  twoSum(nums2, target2)
);
