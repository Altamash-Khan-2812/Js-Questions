function isArmstrongNumber(num) {
  let numArray = Array.from(String(num), Number);
  let totalOfSquaredNums = 0;
  for (let num of numArray) {
    totalOfSquaredNums += Math.pow(num, numArray.length);
  }
  if (num === totalOfSquaredNums) {
    return true;
  }
  return false;
}
