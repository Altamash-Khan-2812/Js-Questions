// Write a function that takes in numbers as input and returns the square of each number

// function squareNums(arr) {
//   let squaredNumsArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let squareNum = arr[i] * arr[i];
//     squaredNumsArr.push(squareNum);
//   }
//   return squaredNumsArr;
// }

function squareNums(arr) {
  return arr.map((num) => num * num);
}
