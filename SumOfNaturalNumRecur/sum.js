// JavaScript Program to Find Sum of Natural Numbers Using Recursion

function sumNumbers(num) {
  if (num <= 0) {
    return "number should be greater than 0";
  } else if (num === 1) {
    return 1;
  } else {
    return (num += sumNumbers(num - 1));
  }
}
console.log(sumNumbers(15));
// 5 + sumNumbers(5-1)
// 5 + 4 + sumNumbers(4-1)
// 5 + 4 + 3 + sumNumbers(3-1)
// 5 + 4 + 3 + 2 + sumNumbers(2-1)
// 5 + 4 + 3 + 2 + 1
