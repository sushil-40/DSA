function sortAray(nums) {
  if (nums.length <= 1) return nums;
  let mid = nums.length / 2;
  let left = sortAray(nums.slice(0, mid));
  let right = sortAray(nums.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

let arr = [4, 5, 1, 12, 3, 9, 2];

let result = sortAray(arr);
console.log(result);
