// Find the common elements between two arrays.
// function getCommonElements(arr1, arr2) {
//   let commontElementsArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) !== -1) {
//       commontElementsArr.push(arr1[i]);
//     }
//   }
//   return commontElementsArr;
// }

// function getCommonElements(arr1, arr2) {
//   let array1 = new Set(arr1);
//   let array2 = new Set(arr2);
//   let mergedArr = [...array1, ...array2];
//   let commontElementsArr = [];
//   let numOfTimes = 0;

//   for (let i = 0; i < mergedArr.length; i++) {
//     for (let j = 0; j < mergedArr.length; j++) {
//       if (mergedArr[i] === mergedArr[j]) {
//         numOfTimes++;
//       }
//     }

//     if (numOfTimes > 1 && !commontElementsArr.includes(mergedArr[i])) {
//       commontElementsArr.push(mergedArr[i]);
//     }
//     numOfTimes = 0;
//   }
//   return commontElementsArr;
// }

function getCommonElements(arr1, arr2) {
  const set1 = new Set([...arr1]);
  const set2 = new Set([...arr2]);
  return set1.intersection(set2);
}
