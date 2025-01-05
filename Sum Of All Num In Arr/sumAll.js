// WRITE A FUNCTION THAT TAKES IN AN ARRAY AND RETURNS THE SUM OF ALL NUMBERS IN THE ARR

// function sumAll(arr) {
//   let totalNum = 0;
//   for (let num of arr) {
//     totalNum += num;
//   }
//   return totalNum;
// }

// function sumAll(arr) {
//   return arr.reduce((acc, currVal) => {
//     acc += currVal;
//     return acc;
//   });
// }

function sumAll(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[arr.length - 1] + sumAll(arr.slice(0, -1));
  }
}

console.log(sumAll([1, 2, 3]));
// 3 + sumAll([1,2])
// 3 + 2 + sumAll([1])
// 3 + 2 + 1 + sumAll([])
// 3 + 2 + 1 + 0
