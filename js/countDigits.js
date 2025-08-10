//Write a function that returns the count of digit in a number;

function countDigit(n) {
  //if n = 0;
  if (n == 0) {
    return 1;
  }

  // converting negative number to positive
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let result = countDigit(-2343424);
console.log(result);
