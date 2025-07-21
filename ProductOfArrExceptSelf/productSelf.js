// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]

function productExceptSelf(arr) {
  let resultsArr = [];
  let currentProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        currentProduct *= arr[j];
      }
    }
    resultsArr.push(currentProduct);
    currentProduct = 1;
  }
  return resultsArr;
}

console.log(productExceptSelf([1, 2, 3, 4]));
