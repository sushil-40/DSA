var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (k == i) {
        k++;
      }
      if (nums[k] + nums[i] === target) {
        return [i, k];
      }
    }
  }
};
