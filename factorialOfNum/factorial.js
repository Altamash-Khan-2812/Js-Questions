// Write a program to find the factorial of a number

// function getFactorial(num) {
//   let factorial = 1;
//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

function getFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * getFactorial(num - 1);
  }
}
