// Write a function to flatten an array

// function flatArr(arr) {
//   return arr.flat(Infinity);
// }

function flatArr(arr) {
  if (arr.length === 0) {
    return [];
  } else if (Array.isArray(arr[0])) {
    return flatArr(arr[0]).concat(flatArr(arr.slice(1)));
  } else {
    return [arr[0]].concat(flatArr(arr.slice(1)));
  }
}
console.log(flatArr([1, 2, [3, ["fdd"]]]));
// [1].concat([ 2, [3, ["fdd"]]])
// [1, 2].concat([ [3, ["fdd"]] ])
// [1, 2, 3].concat([ [["fdd"]] ])
// [1,2,3, "fdd"]
