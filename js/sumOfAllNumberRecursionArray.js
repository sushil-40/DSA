// sum of all number [5,4,3,2,7,5] using recursion
// let arr = [5, 4, 3, 2];

// function sum(n) {
//   if (n == 0) {
//     return arr[n];
//   }
//   return arr[n] + sum(n - 1);
// }

// let result = sum(arr.length - 1);
// console.log(result);

arr = [5, 2, 0, 3, 6, 7];
function sum(n) {
  isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sum(n - 1);
}

let result = sum(arr.length - 1);
console.log(result);
