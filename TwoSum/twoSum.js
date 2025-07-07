function twoSum(numsArr, targetSum) {
  let indexes = [];
  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (indexes.length === 0 && numsArr[i] + numsArr[j] === targetSum) {
        indexes.push(numsArr.indexOf(numsArr[i]));
        indexes.push(numsArr.indexOf(numsArr[j]));
      }
    }
  }
  return indexes;
}

console.log(twoSum([10, 22, 5, 74, 65, 80], 85));
// expected output [2, 5]
