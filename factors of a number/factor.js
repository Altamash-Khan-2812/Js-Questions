// write a function that takes in a number as input and returns the factors of the num

function getFactors(num) {
  let factorsArr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}
