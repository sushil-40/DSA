// Example 1:
// Input: nums = [0, 1, 0, 3, 12];

// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
Input: test = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  for (i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
};

let arr = moveZeroes(test);
console.log(arr);
