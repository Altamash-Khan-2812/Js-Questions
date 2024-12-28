// Find the sum of digits of a number.

// function sumAllDigits(num) {
//   let str = num.toString();
//   let arr = str.split("");
//   return arr.reduce(function (acc, currVal) {
//     acc + currVal;
//   });
// }

// function sumAllDigits(num) {
//   let str = num.toString();
//   let finalStr = "";
//   for (let i = 0; i < str.length; i++) {
//     finalStr += str[i] + "+";
//   }
//   finalStr = finalStr.slice(0, -1);
//   return eval(finalStr);
// }

function sumAllDigits(num) {
  let str = num.toString();
  let arr = str.split("");
  let sumOfAllDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfAllDigits += +arr[i];
  }
  return sumOfAllDigits;
}
