// WRITE A FUNCTION TO SORT AN ARRAY WITHOUT SORT METHOD

function sortArr(arr) {
  let sortedArr = [];
  let length = arr.length;
  for (let j = 0; j < length; j++) {
    let element = smallestNum(arr);
    sortedArr.push(element);
    arr.splice(arr.indexOf(element), 1);
  }
  return sortedArr;
}

function smallestNum(arr) {
  let smallestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

console.log(sortArr(["z", "c", "a", "f", "s"]));
