// 3. Largest among Three:
//  Write a program that compares three numbers and prints the largest one.

// USING IF ELSE STATEMENT
// function findlargest(x, y, z) {
//   if (x > y && x > z) {
//     return `${x} is the largest number`;
//   } else if (y > x && y > z) {
//     return `${y} is the largest number`;
//   } else {
//     return `${z} is the largest number`;
//   }
// }

// USING REDUCE MAP METHOD
// function getLargestNumber(a, b, c) {
//   let numbersArray = [a, b, c];
//   return numbersArray.reduce((acc, currVal) => {
//     if (acc > currVal) {
//       return acc;
//     } else {
//       return currVal;
//     }
//   });
// }

// USING SHORT CIRCUIT EVALUATION
function getBiggestNumber(a, b, c) {
  return (
    (a > b && a > c && `${a} is the biggest number`) ||
    (b > a && b > c && `${b} is the biggest number`) ||
    (c > a && c > b && `${c} is the biggest number`)
  );
}
