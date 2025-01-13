function getHCF(num1, num2) {
  let num1FactorsArr = getFactors(num1);
  let num2FactorsArr = getFactors(num2);
  let commonFactorsArr = [];

  for (let i = 0; i < num2FactorsArr.length; i++) {
    if (num1FactorsArr.includes(num2FactorsArr[i])) {
      commonFactorsArr.push(num2FactorsArr[i]);
    }
  }
  return Math.max(...commonFactorsArr);
}

function getFactors(num) {
  let factorsArr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factorsArr.push(i);
    }
  }
  return factorsArr;
}
