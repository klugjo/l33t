// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
  const hashMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i = i + 1) {
    const complementIndex = hashMap[target - nums[i]];

    if (complementIndex !== undefined && i !== complementIndex) {
      return [complementIndex, i];
    }
    hashMap[nums[i]] = i;
  }

  throw new Error('404');
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
console.log(twoSum([3, 3, 6, 17, 12, 5, 8, 34], 25), [3, 6]);
