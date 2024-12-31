//Write a function to calculate the power of a number (x^n).

// function powerOfNum(num, power) {
//   let product = 1;
//   for (let i = 0; i < power; i++) {
//     product *= num;
//   }
//   return product;
// }

// function powerOfNum(num, power) {
//   return Math.pow(num, power);
// }

function powerOfNum(num, power) {
  let arr = [];
  for (let i = 0; i < power; i++) {
    arr.push(num);
  }
  return arr.reduce(function (acc, currVal) {
    acc *= currVal;
    return acc;
  });
}
