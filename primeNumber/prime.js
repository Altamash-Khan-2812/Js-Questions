// Write a function to check if a number is prime.

// function isPrime(num) {
//   let halfOfNum = Math.floor(num / 2);

//   for (let i = 2; i < halfOfNum; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function getFactors(num) {
  let factorsArr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}

function isPrime(num) {
  if (num <= 1) {
    return "number should be greater than 1";
  } else if (getFactors(num).length === 2) {
    return true;
  } else {
    return false;
  }
}
