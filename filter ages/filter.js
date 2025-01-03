// Filter ages greater than or equal to 18 from [16, 22, 14, 30, 18].
// function filterAges(arr, num = 18) {
//   arr.filter((age) => {
//     if (age < num) {
//       let index = arr.indexOf(age);
//       arr.splice(index, 1);
//     }
//   });
//   return arr;
// }

function filterAge(arr, num = 18) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
