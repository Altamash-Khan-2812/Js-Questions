//  Write a function to find the largest number in an array.

// function getLargestNumber(arr) {
//   let largestNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   return largestNumber;
// }

// function findLargestNumber(arr) {
//   return arr.reduce((acc, currVal) => {
//     if (acc > currVal) {
//       return acc;
//     } else {
//       return currVal;
//     }
//   });
// }

// function findLargestNumber(arr) {
//   return Math.max(...arr);
// }

// function findLargestNumber(arr) {
//   let largestNumber = arr.sort((a, b) => {
//     return b - a;
//   });
//   return largestNumber[0];
// }
