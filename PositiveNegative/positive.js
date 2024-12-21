// 2. Positive or Negative:
//  Create a program that checks if a given number is positive, negative, or zero.

// function checkNum(num) {
//   if (num < 0) {
//     return `${num} is a negative number`;
//   } else if (num > 0) {
//     return `${num} is a positive number`;
//   } else if (num === 0) {
//     return `${num} is zero`;
//   } else {
//     return `${num} is an invalid number`;
//   }
// }

// function checkNum(num) {
//   return num > 0
//     ? "Positive number"
//     : num < 0
//     ? "Negative number"
//     : num === 0
//     ? "Zero"
//     : "Invalid Number";
// }

function checkNum(num) {
  return (
    (num > 0 && "Positive Number") ||
    (num < 0 && "Negative Number") ||
    (num === 0 && "Zero") ||
    "invalid Number"
  );
}
