//find the third largest number in an array
let arr = [10, 20, 30, 40, 40, 30, 50, 50, 50];

let firstLargestNumber = -Infinity;
let secondLargestNumber = -Infinity;
let thirdLargestNumber = -Infinity;

function findSecondLargestElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNumber) {
      thirdLargestNumber = secondLargestNumber;
      secondLargestNumber = firstLargestNumber;
      firstLargestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] !== firstLargestNumber) {
      thirdLargestNumber = secondLargestNumber;
      secondLargestNumber = arr[i];
    } else if (
      arr[i] > thirdLargestNumber &&
      arr[i] !== secondLargestNumber &&
      arr[i] !== firstLargestNumber
    ) {
      thirdLargestNumber = arr[i];
    }
  }
  return thirdLargestNumber;
}

let result = findSecondLargestElem(arr);
console.log(result);
